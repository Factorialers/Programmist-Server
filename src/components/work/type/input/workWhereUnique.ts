import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class WorkWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
