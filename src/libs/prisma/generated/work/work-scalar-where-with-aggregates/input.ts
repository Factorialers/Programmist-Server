import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/string-with-aggregates-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';
import { DateTimeWithAggregatesFilter } from '../../prisma/date-time-with-aggregates-filter/input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/date-time-nullable-with-aggregates-filter/input';
import { BoolWithAggregatesFilter } from '../../prisma/bool-with-aggregates-filter/input';

@InputType()
export class WorkScalarWhereWithAggregatesInput {

    @Field(() => [WorkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkScalarWhereWithAggregatesInput>;

    @Field(() => [WorkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkScalarWhereWithAggregatesInput>;

    @Field(() => [WorkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    logoURL?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    readmeURL?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    sourceCodeURL?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    publishedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPublish?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
