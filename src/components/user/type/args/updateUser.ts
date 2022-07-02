import { ArgsType, Field } from '@nestjs/graphql';
import UserUpdateInput from '../input/userUpdate';
import UserWhereUniqueInput from '../input/userWhereUnique';

@ArgsType()
export default class UpdateUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;

  @Field(() => UserUpdateInput, { nullable: false })
  data: UserUpdateInput;
}
