import { ArgsType, Field } from '@nestjs/graphql';
import WorkRelatedUserWhere from '../input/workRelatedUserWhere';
import WorkUpdateInput from '../input/workUpdate';

@ArgsType()
export default class UpdateWorkArgs {
  @Field(() => WorkRelatedUserWhere, { nullable: false })
  where: WorkRelatedUserWhere;

  @Field(() => WorkUpdateInput, { nullable: false })
  data: WorkUpdateInput;
}
