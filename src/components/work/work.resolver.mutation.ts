import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import AuthGuard from '../../guards/auth.guard';
import CreateWorkArgs from './type/args/createWork';
import DeleteWorkArgs from './type/args/deleteWork';
import UpdateWorkArgs from './type/args/updateWork';
import Work from './type/model';
import WorkService from './work.service';

@Resolver()
@UseGuards(AuthGuard)
export default class WorkMutation {
  constructor(private service: WorkService) {}

  @Mutation(() => Work)
  async createWork(@Args() args: CreateWorkArgs) {
    const work = await this.service.create({
      data: {
        ...args.data,
        user: { connect: { id: args.data.userId } },
      },
    });

    return work;
  }

  @Mutation(() => Work)
  async updateWork(@Args() args: UpdateWorkArgs) {
    const work = await this.service.update(args);

    return work;
  }

  @Mutation(() => Work)
  async deleteWork(@Args() args: DeleteWorkArgs) {
    const work = await this.service.delete(args);

    return work;
  }
}
