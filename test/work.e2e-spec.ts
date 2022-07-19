/* eslint-disable no-console */
import { INestApplication, INestApplicationContext } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Auth as AdminAuth, UserRecord } from 'firebase-admin/auth';
import { signInWithCustomToken, Auth, User } from 'firebase/auth';
import gql from 'graphql-tag';
import request from 'supertest-graphql';
import AppModule from '../src/app/app.module';
import UserModule from '../src/components/user/user.module';
import UserMutation from '../src/components/user/user.resolver.mutation';
import FirebaseModule from '../src/libs/firebase/firebase.module';
import FirebaseService from '../src/libs/firebase/firebase.service';

jest.setTimeout(15000);

describe('Work E2E Test', () => {
  let app: INestApplication;
  let firebaseModule: INestApplicationContext;
  let userModule: INestApplicationContext;
  let auth: Auth;
  let adminAuth: AdminAuth;
  let testUserRecord: UserRecord;
  let testUser: User;
  let testToken: string;

  beforeEach(async () => {
    const appModuleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = appModuleRef.createNestApplication();
    await app.init();

    firebaseModule = app.select(FirebaseModule);
    auth = firebaseModule.get(FirebaseService).auth;
    adminAuth = firebaseModule.get(FirebaseService).adminAuth;

    testUserRecord = await adminAuth.createUser({
      displayName: 'e2e-test-user',
      email: `e2e-test-user${Date.parse(Date())}@gmail.com`,
      password: 'e2e-test-user',
    });
    const testCustomToken = await adminAuth.createCustomToken(testUserRecord.uid);
    const testUserCredential = await signInWithCustomToken(auth, testCustomToken);
    testUser = testUserCredential.user;
    testToken = await testUser.getIdToken();

    userModule = app.select(UserModule);
    await userModule.get(UserMutation).createUser({
      data: {
        id: testUser.uid,
        name: testUser.displayName ? testUser.displayName : '',
        works: [],
      },
    });
  });

  afterEach(async () => {
    await userModule.get(UserMutation).deleteUser({
      where: { id: testUser.uid },
    });

    await userModule.close();
    await firebaseModule.close();
    await app.close();
  });

  test('findWorks', async () => {
    const { data, errors, response } = await request(app.getHttpServer())
      .query(
        gql`
          query FindWorkById {
            findWorks {
              id
              title
              user {
                id
                name
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

  test('createWork, updateWork, deleteWork', async () => {
    const createdWork = await request<{ createWork: { id: string; title: string; user: { id: string; name: string }; createdAt: Date } }>(
      app.getHttpServer(),
    )
      .mutate(
        gql`
          mutation CreateWork($data: WorkCreateInput!) {
            createWork(data: $data) {
              id
              title
              user {
                id
                name
              }
              createdAt
            }
          }
        `,
      )
      .variables({
        data: {
          title: 'work title',
          tags: ['tag-A', 'tag-B'],
          logoURL: 'logo-url',
          licenseURL: 'license-url',
          readmeURL: 'readme-url',
          sourceCodeURL: 'source-code-url',
          userId: testUser.uid,
        },
      })
      .set('authorization', testToken)
      .expectNoErrors();

    expect(createdWork.response.status).toBe(200);
    console.dir(createdWork.data);
    console.dir(createdWork.errors);

    const updatedWork = await request(app.getHttpServer())
      .mutate(
        gql`
          mutation UpdateWork($data: WorkUpdateInput!, $where: WorkRelatedUserWhere!) {
            updateWork(data: $data, where: $where) {
              id
              title
              user {
                id
                name
              }
              createdAt
            }
          }
        `,
      )
      .variables({
        data: {
          title: 'updated work title',
        },
        where: {
          id: createdWork.data?.createWork.id,
          userId: testUser.uid,
        },
      })
      .set('authorization', testToken)
      .expectNoErrors();

    expect(updatedWork.response.status).toBe(200);
    console.dir(updatedWork.data);
    console.dir(updatedWork.errors);

    const deletedWork = await request(app.getHttpServer())
      .mutate(
        gql`
          mutation DeleteWork($where: WorkRelatedUserWhere!) {
            deleteWork(where: $where) {
              id
              title
              user {
                id
                name
              }
              createdAt
            }
          }
        `,
      )
      .variables({
        where: {
          id: createdWork.data?.createWork.id,
          userId: testUser.uid,
        },
      })
      .set('authorization', testToken)
      .expectNoErrors();

    expect(deletedWork.response.status).toBe(200);
    console.dir(deletedWork.data);
    console.dir(deletedWork.errors);
  });
});
