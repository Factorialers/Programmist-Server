import { ArgsType, Field, Int } from '@nestjs/graphql';
import UserOrderInput from '../input/userOrder';
import UserWhereInput from '../input/userWhere';
import UserWhereUniqueInput from '../input/userWhereUnique';

@ArgsType()
export default class FindUsersArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @Field(() => [UserOrderInput], { nullable: true })
  orderBy?: UserOrderInput[];

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
