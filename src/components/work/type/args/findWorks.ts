import { ArgsType, Field, Int } from '@nestjs/graphql';
import WorkOrderInput from '../input/workOrder';
import WorkWhereInput from '../input/workWhere';
import WorkWhereUniqueInput from '../input/workWhereUnique';

@ArgsType()
export default class FindWorksArgs {
  @Field(() => WorkWhereInput, { nullable: true })
  where?: WorkWhereInput;

  @Field(() => [WorkOrderInput], { nullable: true })
  orderBy?: WorkOrderInput[];

  @Field(() => WorkWhereUniqueInput, { nullable: true })
  cursor?: WorkWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
