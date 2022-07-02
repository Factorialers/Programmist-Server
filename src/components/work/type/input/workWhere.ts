/* eslint-disable no-use-before-define */
import { InputType, Field } from '@nestjs/graphql';
import { BoolFilter } from '../../../../libs/prisma/generated/prisma/bool-filter/input';
import { DateTimeFilter } from '../../../../libs/prisma/generated/prisma/date-time-filter/input';
import { DateTimeNullableFilter } from '../../../../libs/prisma/generated/prisma/date-time-nullable-filter/input';
import { StringFilter } from '../../../../libs/prisma/generated/prisma/string-filter/input';
import { StringNullableListFilter } from '../../../../libs/prisma/generated/prisma/string-nullable-list-filter/input';
import UserRelationFilter from '../../../user/type/input/userRelationFilter';

@InputType()
export default class WorkWhereInput {
  @Field(() => [WorkWhereInput], { nullable: true })
  AND?: WorkWhereInput[];

  @Field(() => [WorkWhereInput], { nullable: true })
  OR?: WorkWhereInput[];

  @Field(() => [WorkWhereInput], { nullable: true })
  NOT?: WorkWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  tags?: StringNullableListFilter;

  @Field(() => StringFilter, { nullable: true })
  logoURL?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  readmeURL?: StringFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  sourceCodeURL?: StringNullableListFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  publishedAt?: DateTimeNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isPublish?: BoolFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;
}
