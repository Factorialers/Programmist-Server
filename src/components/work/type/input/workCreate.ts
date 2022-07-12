import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class WorkCreateInput {
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

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  publishedAt?: Date | null;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isPublish: boolean;

  @Field(() => String, { nullable: false })
  userId: string;
}
