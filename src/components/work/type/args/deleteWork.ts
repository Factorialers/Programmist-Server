import { ArgsType, Field } from '@nestjs/graphql';
import WorkWhereUniqueInput from '../input/workWhereUnique';

@ArgsType()
export default class DeleteWorkArgs {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  where: WorkWhereUniqueInput;
}
