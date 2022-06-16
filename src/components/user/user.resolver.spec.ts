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
});
