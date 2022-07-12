import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class WorkUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => String, { nullable: true })
  logoURL?: string;

  @Field(() => String, { nullable: true })
  licenseURL?: string;

  @Field(() => [String], { nullable: true })
  sourceCodeURL?: string[];

  @Field(() => Boolean, { nullable: true })
  isPublish?: boolean;
}
