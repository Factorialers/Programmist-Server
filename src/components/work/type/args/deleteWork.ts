import { ArgsType, Field } from '@nestjs/graphql';
import WorkRelatedUserWhere from '../input/WorkRelatedUserWhere';

@ArgsType()
export default class DeleteWorkArgs {
  @Field(() => WorkRelatedUserWhere, { nullable: false })
  where: WorkRelatedUserWhere;
}
