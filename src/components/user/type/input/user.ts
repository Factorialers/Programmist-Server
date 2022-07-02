import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
