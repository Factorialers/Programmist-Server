/* eslint-disable no-console */
import { INestApplication, INestApplicationContext } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Auth as AdminAuth } from 'firebase-admin/auth';
import { signInWithCustomToken, Auth } from 'firebase/auth';
import gql from 'graphql-tag';
import request from 'supertest-graphql';
import AppModule from '../src/app/app.module';
import FirebaseModule from '../src/libs/firebase/firebase.module';
import FirebaseService from '../src/libs/firebase/firebase.service';

describe('User E2E Test', () => {
  let app: INestApplication;
  let firebaseModule: INestApplicationContext;
  let auth: Auth;
  let adminAuth: AdminAuth;

  beforeEach(async () => {
    const appModuleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = appModuleRef.createNestApplication();
    await app.init();

    firebaseModule = app.select(FirebaseModule);
    auth = firebaseModule.get(FirebaseService).auth;
    adminAuth = firebaseModule.get(FirebaseService).adminAuth;
  });

  afterEach(async () => {
    await firebaseModule.close();
    await app.close();
  });

  test('findUsers', async () => {
    const { data, errors, response } = await request(app.getHttpServer())
      .query(
        gql`
          query FindUserById {
            findUsers {
              id
              name
              works {
                id
                title
                userId
              }
              createdAt
            }
          }
        `,
      )
      .expectNoErrors();

    expect(response.status).toBe(200);
    console.dir(data);
    console.dir(errors);
  });

  test('createUser, updateUser, deleteUser', async () => {
    const testUserRecord = await adminAuth.createUser({
      displayName: 'e2e-test-user',
      email: `e2e-test-user${Date.parse(Date())}@gmail.com`,
      password: 'e2e-test-user',
    });
    const testCustomToken = await adminAuth.createCustomToken(testUserRecord.uid);
    const testUserCredential = await signInWithCustomToken(auth, testCustomToken);
    const testUser = testUserCredential.user;
    const testToken = await testUser.getIdToken();

    const createdUser = await request(app.getHttpServer())
      .mutate(
        gql`
          mutation CreateUser($data: UserCreateInput!) {
            createUser(data: $data) {
              id
              name
              works {
                id
                title
                userId
              }
              createdAt
            }
          }
        `,
      )
      .variables({
        data: {
          id: testUser.uid,
          name: testUser.displayName,
        },
      })
      .set('authorization', testToken)
      .expectNoErrors();

    expect(createdUser.response.status).toBe(200);
    console.dir(createdUser.data);
    console.dir(createdUser.errors);

    const updatedUser = await request(app.getHttpServer())
      .mutate(
        gql`
          mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
            updateUser(data: $data, where: $where) {
              id
              name
              works {
                id
                title
                userId
              }
              createdAt
            }
          }
        `,
      )
      .variables({
        data: {
          name: `updated ${testUser.displayName}`,
        },
        where: {
          id: testUser.uid,
        },
      })
      .set('authorization', testToken)
      .expectNoErrors();

    expect(updatedUser.response.status).toBe(200);
    console.dir(updatedUser.data);
    console.dir(updatedUser.errors);

    const deletedUser = await request(app.getHttpServer())
      .mutate(
        gql`
          mutation DeleteUser($where: UserWhereUniqueInput!) {
            deleteUser(where: $where) {
              id
              name
              works {
                id
                title
                userId
              }
              createdAt
            }
          }
        `,
      )
      .variables({
        where: {
          id: testUser.uid,
        },
      })
      .set('authorization', testToken)
      .expectNoErrors();

    expect(deletedUser.response.status).toBe(200);
    console.dir(deletedUser.data);
    console.dir(deletedUser.errors);
  });

  test('AuthGuard', async () => {
    const testUserRecord = await adminAuth.createUser({
      displayName: 'e2e-test-user',
      email: `e2e-test-user${Date.parse(Date())}@gmail.com`,
      password: 'e2e-test-user',
    });
    const testCustomToken = await adminAuth.createCustomToken(testUserRecord.uid);
    const testUserCredential = await signInWithCustomToken(auth, testCustomToken);
    const testUser = testUserCredential.user;
    const testToken = await testUser.getIdToken();

    const createdUser = await request(app.getHttpServer())
      .mutate(
        gql`
          mutation CreateUser($data: UserCreateInput!) {
            createUser(data: $data) {
              id
              name
              works {
                id
                title
                userId
              }
              createdAt
            }
          }
        `,
      )
      .variables({
        data: {
          id: 'invalid-fake-uid',
          name: testUser.displayName,
        },
      })
      .set('authorization', testToken)

    expect(createdUser.data).toEqual(null);
    console.dir(createdUser.data);
    console.dir(createdUser.errors);

    await adminAuth.deleteUser(testUser.uid);
  });
});
