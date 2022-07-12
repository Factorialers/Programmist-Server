import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class UserUpdateInput {
  @Field(() => String, { nullable: false })
  name: string;
}
