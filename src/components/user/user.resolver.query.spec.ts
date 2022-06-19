import { mock, MockedType } from '../../test/mock';
import UserQuery from './user.resolver.query';
import UserService from './user.service';

describe('User Query Resolver Test', () => {
  let mockedUserService: MockedType<UserService>;
  let userQuery: UserQuery;

  beforeEach(() => {
    mockedUserService = mock<UserService>();
    userQuery = new UserQuery(mockedUserService);
  });

  test('findUserById', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      createdAt: new Date(),
    };
    mockedUserService.findUser.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userQuery.findUserById({ where: { id: expectUser.id } })).resolves.toEqual(expectUser);
  });

  test('findUsers', async () => {
    const fakeUsers = [
      {
        id: 'abc-123',
        name: 'yukarisan-lover',
        createdAt: new Date(),
      },
      {
        id: 'abc-124',
        name: 'mikusan-lover',
        createdAt: new Date(),
      },
    ];
    mockedUserService.findUsers.mockResolvedValue(fakeUsers);

    const expectUsers = fakeUsers;
    await expect(
      userQuery.findUsers({
        where: {
          AND: expectUsers.map((user) => ({
            name: {
              equals: user.name,
            },
          })),
        },
      }),
    ).resolves.toEqual(expectUsers);
  });
});
