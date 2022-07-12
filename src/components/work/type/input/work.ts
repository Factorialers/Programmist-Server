import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class WorkInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => [String], { nullable: false })
  tags: string[];

  @Field(() => String, { nullable: false })
  logoURL: string;

  @Field(() => String, { nullable: false })
  readmeURL: string;

  @Field(() => String, { nullable: false })
  licenseURL: string;

  @Field(() => [String], { nullable: false })
  sourceCodeURL: string[];

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Date, { nullable: false })
  publishedAt: Date;

  @Field(() => Boolean, { nullable: false })
  isPublish: boolean;

  @Field(() => String, { nullable: false })
  userId: string;
}
