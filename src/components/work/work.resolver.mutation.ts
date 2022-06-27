import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import AuthGuard from '../../guards/auth.guard';
import { CreateOneWorkArgs } from '../../libs/prisma/generated/work/create-one-work/args';
import { DeleteOneWorkArgs } from '../../libs/prisma/generated/work/delete-one-work/args';
import { UpdateOneWorkArgs } from '../../libs/prisma/generated/work/update-one-work/args';
import { Work } from '../../libs/prisma/generated/work/work/model';
import WorkService from './work.service';

@Resolver()
@UseGuards(AuthGuard)
export default class WorkMutation {
  constructor(private service: WorkService) {}

  @Mutation(() => Work)
  async createWork(@Args() args: CreateOneWorkArgs) {
    const work = await this.service.create(args);

    return work;
  }

  @Mutation(() => Work)
  async updateWork(@Args() args: UpdateOneWorkArgs) {
    const work = await this.service.update(args);

    return work;
  }

  @Mutation(() => Work)
  async deleteWork(@Args() args: DeleteOneWorkArgs) {
    const work = await this.service.delete(args);

    return work;
  }
}
