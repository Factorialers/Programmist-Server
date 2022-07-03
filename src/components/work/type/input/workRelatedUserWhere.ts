import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class WorkRelatedUserWhere {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  userId: string;
}
