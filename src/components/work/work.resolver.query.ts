import { Resolver, Query, Args } from '@nestjs/graphql';
import { FindManyWorkArgs } from '../../libs/prisma/generated/work/find-many-work/args';
import { FindUniqueWorkArgs } from '../../libs/prisma/generated/work/find-unique-work/args';
import { Work } from '../../libs/prisma/generated/work/work/model';
import WorkService from './work.service';

@Resolver()
export default class WorkQuery {
  constructor(private service: WorkService) {}

  @Query(() => Work, { nullable: true })
  async findWorkById(@Args() args: FindUniqueWorkArgs): Promise<Work | null> {
    const work = await this.service.findWork(args);

    return work;
  }

  @Query(() => [Work])
  async findWorks(@Args() args: FindManyWorkArgs): Promise<Work[]> {
    const works = await this.service.findWorks(args);

    return works;
  }
}
