import { ArgsType, Field } from '@nestjs/graphql';
import WorkRelatedUserWhere from '../input/workRelatedUserWhere';

@ArgsType()
export default class DeleteWorkArgs {
  @Field(() => WorkRelatedUserWhere, { nullable: false })
  where: WorkRelatedUserWhere;
}
