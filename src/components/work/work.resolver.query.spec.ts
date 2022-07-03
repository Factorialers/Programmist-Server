import { mock, MockedType } from '../../test/mock';
import WorkQuery from './work.resolver.query';
import WorkService from './work.service';

describe('Work Query Resolver Test', () => {
  let mockedWorkService: MockedType<WorkService>;
  let workQuery: WorkQuery;

  beforeEach(() => {
    mockedWorkService = mock<WorkService>();
    workQuery = new WorkQuery(mockedWorkService);
  });

  test('findWorkById', async () => {
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

    mockedWorkService.findWork.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(workQuery.findWorkById({ where: { id: expectWork.id } })).resolves.toEqual(expectWork);
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

    mockedWorkService.findWorks.mockResolvedValue(fakeWorkWithUser);

    const expectWorks = fakeWorkWithUser;
    await expect(
      workQuery.findWorks({
        where: {
          AND: expectWorks.map((work) => ({
            title: {
              equals: work.title,
            },
          })),
        },
      }),
    ).resolves.toEqual(expectWorks);
  });
});
