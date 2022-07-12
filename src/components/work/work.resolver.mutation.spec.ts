import { mock, MockedType } from '../../test/mock';
import WorkMutation from './work.resolver.mutation';
import WorkService from './work.service';

describe('Work Mutation Resolver Test', () => {
  let mockedWorkService: MockedType<WorkService>;
  let workQuery: WorkMutation;

  beforeEach(() => {
    mockedWorkService = mock<WorkService>();
    workQuery = new WorkMutation(mockedWorkService);
  });

  test('createWork', async () => {
    const fakeWork = {
      id: 'abc-123',
      title: 'yukarisan-ga-kawaii-hanasi',
      tags: ['yukarisan', 'kawaii'],
      logoURL: 'logo-url',
      readmeURL: 'readme-url',
      licenseURL: 'license-url',
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

    mockedWorkService.create.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(workQuery.createWork({ data: expectWork })).resolves.toEqual(expectWork);
  });

  test('updateWork', async () => {
    const fakeWork = {
      id: 'abc-123',
      title: 'yukarisan-ga-kawaii-hanasi',
      tags: ['yukarisan', 'kawaii'],
      logoURL: 'logo-url',
      readmeURL: 'readme-url',
      licenseURL: 'license-url',
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

    mockedWorkService.update.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(
      workQuery.updateWork({ where: { id: expectWork.id, userId: expectWork.userId }, data: { title: expectWork.title } }),
    ).resolves.toEqual(expectWork);
  });

  test('deleteWork', async () => {
    const fakeWork = {
      id: 'abc-123',
      title: 'yukarisan-ga-kawaii-hanasi',
      tags: ['yukarisan', 'kawaii'],
      logoURL: 'logo-url',
      readmeURL: 'readme-url',
      licenseURL: 'license-url',
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

    mockedWorkService.delete.mockResolvedValue(fakeWorkWithUser);

    const expectWork = fakeWorkWithUser;
    await expect(workQuery.deleteWork({ where: { id: expectWork.id, userId: expectWork.userId } })).resolves.toEqual(expectWork);
  });
});
