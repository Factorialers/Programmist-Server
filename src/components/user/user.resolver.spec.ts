import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, adminAuth } from '../../libs/firebase/auth';
import { mock, MockedType } from '../../test/mock';
import UserQuery from './user.resolver.query';
import UserService from './user.service';

describe('user resolver test', () => {
  let mockedUserService: MockedType<UserService>;
  let userQuery: UserQuery;

  beforeEach(() => {
    mockedUserService = mock<UserService>();
    userQuery = new UserQuery(mockedUserService);
  });

  test('should create new user', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      avatarURL: 'https://www.example.com/icon.png',
      createdAt: new Date(Date.now()),
    };
    mockedUserService.findUser.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userQuery.findUserById({ where: { id: expectUser.id } })).resolves.toEqual(expectUser);
  });

  test('should auth user', async () => {
    const testUserUid = 'drqhwOqMw2TQ4yNAMZrl4Vl03TB3';
    const token = await adminAuth.createCustomToken(testUserUid);
    signInWithEmailAndPassword(auth, 'test_user@gmail.com', 'test_user');

    expect(userQuery.getAuthorizationHeader({ authorization: token })).toEqual(token);
  });
});
