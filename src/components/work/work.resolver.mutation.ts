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
        title: args.data.title,
        tags: args.data.tags,
        logoURL: args.data.logoURL,
        readmeURL: args.data.readmeURL,
        sourceCodeURL: args.data.sourceCodeURL,
        isPublish: args.data.isPublish,
        user: { connect: { id: args.data.userId } },
      },
    });

    return work;
  }

  @Mutation(() => Work)
  async updateWork(@Args() args: UpdateWorkArgs) {
    const work = await this.service.update({
      data: {
        title: args.data.title,
        tags: args.data.tags,
        sourceCodeURL: args.data.sourceCodeURL,
        isPublish: args.data.isPublish,
      },
      where: { id: args.where.id },
    });

    return work;
  }

  @Mutation(() => Work)
  async deleteWork(@Args() args: DeleteWorkArgs) {
    const work = await this.service.delete({ where: { id: args.where.id } });

    return work;
  }
}
