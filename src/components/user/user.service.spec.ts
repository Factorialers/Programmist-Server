import MockContext from '../../test/mock';
import UserService from './user.service';

describe('User DB Service Test', () => {
  let mockContext: MockContext;
  let userService: UserService;

  beforeEach(() => {
    mockContext = new MockContext();
    userService = new UserService(mockContext.prisma);
  });

  test('findUser', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      createdAt: new Date(),
    };
    mockContext.prisma.user.findUnique.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userService.findUser({ where: { id: expectUser.id } })).resolves.toEqual(expectUser);
  });

  test('findUsers', async () => {
    const fakeUser = [
      {
        id: 'abc-123',
        name: 'yukarisan-lover',
        createdAt: new Date(),
      },
    ];
    mockContext.prisma.user.findMany.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userService.findUsers({ where: { name: { equals: expectUser[0].name } } })).resolves.toEqual(expectUser);
  });

  test('create', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      createdAt: new Date(),
    };
    mockContext.prisma.user.create.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userService.create({ data: expectUser })).resolves.toEqual(expectUser);
  });

  test('update', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      createdAt: new Date(),
    };
    mockContext.prisma.user.update.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    await expect(userService.update({ where: { id: expectUser.id }, data: { name: expectUser.name } })).resolves.toEqual(expectUser);
  });

  test('delete', async () => {
    const fakeUser = {
      id: 'abc-123',
      name: 'yukarisan-lover',
      createdAt: new Date(),
    };
    mockContext.prisma.$transaction.mockResolvedValue([{ count: 0 }, fakeUser]);

    const expectUser = fakeUser;
    await expect(userService.delete({ where: { id: expectUser.id } })).resolves.toEqual(expectUser);
  });
});
