import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import AuthGuard from '../../guards/auth.guard';
import FirebaseService from '../../libs/firebase/firebase.service';
import CreateUserArgs from './type/args/createUser';
import DeleteUserArgs from './type/args/deleteUser';
import UpdateUserArgs from './type/args/updateUser';
import User from './type/model';
import UserService from './user.service';

@Resolver()
@UseGuards(AuthGuard)
export default class UserMutation {
  constructor(private firebaseService: FirebaseService, private service: UserService) {}

  @Mutation(() => User)
  async createUser(@Args() args: CreateUserArgs) {
    const user = await this.service.create({
      data: {
        ...args.data,
        works: { connect: args.data.works },
      },
    });

    return user;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateUserArgs) {
    const user = await this.service.update(args);
    await this.firebaseService.adminAuth.updateUser(args.where.id, { displayName: args.data.name });

    return user;
  }

  @Mutation(() => User)
  async deleteUser(@Args() args: DeleteUserArgs) {
    const user = await this.service.delete(args);
    await this.firebaseService.adminAuth.deleteUser(args.where.id);

    return user;
  }
}
