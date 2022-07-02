import { ArgsType, Field } from '@nestjs/graphql';
import WorkWhereUniqueInput from '../input/workWhereUnique';

@ArgsType()
export default class FindWorkArgs {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  where: WorkWhereUniqueInput;
}
