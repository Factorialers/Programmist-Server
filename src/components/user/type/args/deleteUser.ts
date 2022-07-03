import { ArgsType, Field } from '@nestjs/graphql';
import UserWhereUniqueInput from '../input/userWhereUnique';

@ArgsType()
export default class DeleteUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where: UserWhereUniqueInput;
}