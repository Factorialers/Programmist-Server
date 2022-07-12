import FirebaseService from '../../libs/firebase/firebase.service';
import { mock, MockedType } from '../../test/mock';
import UserMutation from './user.resolver.mutation';
import UserService from './user.service';

describe('User Mutation Resolver Test', () => {
  let mockedFirebaseService: MockedType<FirebaseService>;
  let mockedUserService: MockedType<UserService>;
  let userQuery: UserMutation;

  beforeEach(() => {
    mockedFirebaseService = mock<FirebaseService>();
    mockedUserService = mock<UserService>();
    userQuery = new UserMutation(mockedFirebaseService, mockedUserService);
  });

  test('createUser', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      works: [],
      createdAt: new Date(),
    };
    mockedUserService.create.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userQuery.createUser({ data: { id: expectUser.id, name: expectUser.name, works: [] } })).resolves.toEqual(expectUser);
  });

  test('updateUser', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      works: [],
      createdAt: new Date(),
    };
    mockedUserService.update.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userQuery.updateUser({ where: { id: expectUser.id }, data: { name: expectUser.name } })).resolves.toEqual(expectUser);
  });

  test('deleteUser', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      works: [],
      createdAt: new Date(),
    };
    mockedUserService.delete.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userQuery.deleteUser({ where: { id: expectUser.id } })).resolves.toEqual(expectUser);
  });
});
