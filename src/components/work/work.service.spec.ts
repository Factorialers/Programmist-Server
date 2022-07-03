import MockContext from '../../test/mock';
import WorkService from './work.service';

describe('Work DB Service Test', () => {
  let mockContext: MockContext;
  let workService: WorkService;

  beforeEach(() => {
    mockContext = new MockContext();
    workService = new WorkService(mockContext.prisma);
  });

  test('findWork', async () => {
    const fakeWork = {
      id: 'abc-123',
      title: 'yukarisan-ga-kawaii-hanasi',
      tags: ['yukarisan', 'kawaii'],
      logoURL: 'logo-url',
      readmeURL: 'readme-url',
      sourceCodeURL: ['src/main.ts', 'src/libs/index.ts'],
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: null,
      isPublish: false,
      userId: 'yukarisan-id',
    };
    const fakeUser = {
      id: 'yukarisan-id',
      name: 'yukarisan-lover',
      works: [fakeWork],
      createdAt: new Date(),
    };
    const fakeWorkWithUser = {
      ...fakeWork,
      user: fakeUser,
    };

    mockContext.prisma.work.findUnique.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(workService.findWork({ where: { id: expectWork.id } })).resolves.toEqual(expectWork);
  });

  test('findWorks', async () => {
    const fakeWorks = [
      {
        id: 'abc-123',
        title: 'yukarisan-ga-kawaii-hanasi',
        tags: ['yukarisan', 'kawaii'],
        logoURL: 'logo-url',
        readmeURL: 'readme-url',
        sourceCodeURL: ['src/main.ts', 'src/libs/index.ts'],
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: null,
        isPublish: false,
        userId: 'yukarisan-id',
      },
      {
        id: 'abc-456',
        title: 'mikusan-ga-kawaii-hanasi',
        tags: ['mikusan', 'kawaii'],
        logoURL: 'logo-url',
        readmeURL: 'readme-url',
        sourceCodeURL: ['src/main.ts', 'src/libs/index.ts'],
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: null,
        isPublish: false,
        userId: 'yukarisan-id',
      },
    ];
    const fakeUser = {
      id: 'yukarisan-id',
      name: 'yukarisan-lover',
      works: fakeWorks,
      createdAt: new Date(),
    };
    const fakeWorkWithUser = fakeWorks.map((work) => ({ ...work, user: fakeUser }));

    mockContext.prisma.work.findMany.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(workService.findWorks({ where: { title: { equals: expectWork[0].title } } })).resolves.toEqual(expectWork);
  });

  test('create', async () => {
    const fakeWork = {
      id: 'abc-123',
      title: 'yukarisan-ga-kawaii-hanasi',
      tags: ['yukarisan', 'kawaii'],
      logoURL: 'logo-url',
      readmeURL: 'readme-url',
      sourceCodeURL: ['src/main.ts', 'src/libs/index.ts'],
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: null,
      isPublish: false,
      userId: 'yukarisan-id',
    };
    const fakeUser = {
      id: 'yukarisan-id',
      name: 'yukarisan-lover',
      works: [fakeWork],
      createdAt: new Date(),
    };
    const fakeWorkWithUser = {
      ...fakeWork,
      user: fakeUser,
    };

    mockContext.prisma.work.create.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(
      workService.create({
        data: {
          ...expectWork,
          user: {
            connect: { id: expectWork.userId },
          },
        },
      }),
    ).resolves.toEqual(expectWork);
  });

  test('update', async () => {
    const fakeWork = {
      id: 'abc-123',
      title: 'yukarisan-ga-kawaii-hanasi',
      tags: ['yukarisan', 'kawaii'],
      logoURL: 'logo-url',
      readmeURL: 'readme-url',
      sourceCodeURL: ['src/main.ts', 'src/libs/index.ts'],
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: null,
      isPublish: false,
      userId: 'yukarisan-id',
    };
    const fakeUser = {
      id: 'yukarisan-id',
      name: 'yukarisan-lover',
      works: [fakeWork],
      createdAt: new Date(),
    };
    const fakeWorkWithUser = {
      ...fakeWork,
      user: fakeUser,
    };

    mockContext.prisma.work.update.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(workService.update({ where: { id: expectWork.id }, data: { title: expectWork.title } })).resolves.toEqual(expectWork);
  });

  test('delete', async () => {
    const fakeWork = {
      id: 'abc-123',
      title: 'yukarisan-ga-kawaii-hanasi',
      tags: ['yukarisan', 'kawaii'],
      logoURL: 'logo-url',
      readmeURL: 'readme-url',
      sourceCodeURL: ['src/main.ts', 'src/libs/index.ts'],
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: null,
      isPublish: false,
      userId: 'yukarisan-id',
    };
    const fakeUser = {
      id: 'yukarisan-id',
      name: 'yukarisan-lover',
      works: [fakeWork],
      createdAt: new Date(),
    };
    const fakeWorkWithUser = {
      ...fakeWork,
      user: fakeUser,
    };

    mockContext.prisma.work.delete.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(workService.delete({ where: { id: expectWork.id } })).resolves.toEqual(expectWork);
  });
});
