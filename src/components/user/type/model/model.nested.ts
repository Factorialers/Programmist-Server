import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export default class NestedUser {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
