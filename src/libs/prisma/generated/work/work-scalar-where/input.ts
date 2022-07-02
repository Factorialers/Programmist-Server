import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';
import { DateTimeNullableFilter } from '../../prisma/date-time-nullable-filter/input';
import { BoolFilter } from '../../prisma/bool-filter/input';

@InputType()
export class WorkScalarWhereInput {

    @Field(() => [WorkScalarWhereInput], {nullable:true})
    AND?: Array<WorkScalarWhereInput>;

    @Field(() => [WorkScalarWhereInput], {nullable:true})
    OR?: Array<WorkScalarWhereInput>;

    @Field(() => [WorkScalarWhereInput], {nullable:true})
    NOT?: Array<WorkScalarWhereInput>;

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

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
