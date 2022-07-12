import { Resolver, Query, Args } from '@nestjs/graphql';
import FindWorkArgs from './type/args/findWork';
import FindWorksArgs from './type/args/findWorks';
import Work from './type/model';
import WorkService from './work.service';

@Resolver()
export default class WorkQuery {
  constructor(private service: WorkService) {}

  @Query(() => Work, { nullable: true })
  async findWorkById(@Args() args: FindWorkArgs): Promise<Work | null> {
    const work = await this.service.findWork(args);

    return work;
  }

  @Query(() => [Work])
  async findWorks(@Args() args: FindWorksArgs): Promise<Work[]> {
    const works = await this.service.findWorks(args);

    return works;
  }
}
