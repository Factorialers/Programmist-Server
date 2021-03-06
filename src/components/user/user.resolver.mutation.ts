import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import AuthGuard from '../../guards/auth.guard';
import FirebaseService from '../../libs/firebase/firebase.service';
import { CreateOneUserArgs } from '../../libs/prisma/generated/user/create-one-user/args';
import { DeleteOneUserArgs } from '../../libs/prisma/generated/user/delete-one-user/args';
import { UpdateOneUserArgs } from '../../libs/prisma/generated/user/update-one-user/args';
import { User } from '../../libs/prisma/generated/user/user/model';
import UserService from './user.service';

@Resolver()
@UseGuards(AuthGuard)
export default class UserMutation {
  constructor(private firebaseService: FirebaseService, private service: UserService) {}

  @Mutation(() => User)
  async createUser(@Args() args: CreateOneUserArgs) {
    const user = await this.service.create(args);

    return user;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateOneUserArgs) {
    if (!args.where.id) {
      throw new Error('where.idは必須のプロパティです。');
    }

    const user = await this.service.update(args);
    await this.firebaseService.adminAuth.updateUser(args.where.id, { displayName: args.data.name });

    return user;
  }

  @Mutation(() => User)
  async deleteUser(@Args() args: DeleteOneUserArgs) {
    if (!args.where.id) {
      throw new Error('where.idは必須のプロパティです。');
    }

    const user = await this.service.delete(args);
    await this.firebaseService.adminAuth.deleteUser(args.where.id);

    return user;
  }
}
