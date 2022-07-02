import { ArgsType, Field } from '@nestjs/graphql';
import WorkUpdateInput from '../input/workUpdate';
import WorkWhereUniqueInput from '../input/workWhereUnique';

@ArgsType()
export default class UpdateWorkArgs {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  where: WorkWhereUniqueInput;

  @Field(() => WorkUpdateInput, { nullable: false })
  data: WorkUpdateInput;
}
