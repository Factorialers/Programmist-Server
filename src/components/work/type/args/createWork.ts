import { ArgsType, Field } from '@nestjs/graphql';
import WorkCreateInput from '../input/workCreate';

@ArgsType()
export default class CreateWorkArgs {
  @Field(() => WorkCreateInput, { nullable: false })
  data: WorkCreateInput;
}
