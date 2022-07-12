import { InputType, Field } from '@nestjs/graphql';
import WorkInput from '../../../work/type/input/work';

@InputType()
export default class UserCreateInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => [WorkInput], { nullable: true, defaultValue: [] })
  works: WorkInput[];

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
}
