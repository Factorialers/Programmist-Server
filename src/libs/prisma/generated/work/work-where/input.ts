import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';
import { DateTimeNullableFilter } from '../../prisma/date-time-nullable-filter/input';
import { BoolFilter } from '../../prisma/bool-filter/input';
import { UserRelationFilter } from '../../user/user-relation-filter/input';

@InputType()
export class WorkWhereInput {

    @Field(() => [WorkWhereInput], {nullable:true})
    AND?: Array<WorkWhereInput>;

    @Field(() => [WorkWhereInput], {nullable:true})
    OR?: Array<WorkWhereInput>;

    @Field(() => [WorkWhereInput], {nullable:true})
    NOT?: Array<WorkWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    logoURL?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    readmeURL?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    licenseURL?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    sourceCodeURL?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPublish?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
