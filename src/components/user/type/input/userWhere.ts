/* eslint-disable no-use-before-define */
import { InputType, Field } from '@nestjs/graphql';
import { DateTimeFilter } from '../../../../libs/prisma/generated/prisma/date-time-filter/input';
import { StringFilter } from '../../../../libs/prisma/generated/prisma/string-filter/input';
import WorkListRelationFilter from '../../../work/type/input/workListRelationFilter';

@InputType()
export default class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: UserWhereInput[];

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: UserWhereInput[];

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: UserWhereInput[];

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => WorkListRelationFilter, { nullable: true })
  works?: WorkListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
