import { Resolver, Query, Args } from '@nestjs/graphql';
import FindUserArgs from './type/args/findUser';
import FindUsersArgs from './type/args/findUsers';
import User from './type/model';
import UserService from './user.service';

@Resolver()
export default class UserQuery {
  constructor(private service: UserService) {}

  @Query(() => User, { nullable: true })
  async findUserById(@Args() args: FindUserArgs): Promise<User | null> {
    const user = await this.service.findUser(args);

    return user;
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindUsersArgs): Promise<User[]> {
    const users = await this.service.findUsers(args);

    return users;
  }
}
