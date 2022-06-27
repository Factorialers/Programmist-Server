import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/sort-order/enum';
import { WorkCountOrderByAggregateInput } from '../work-count-order-by-aggregate/input';
import { WorkMaxOrderByAggregateInput } from '../work-max-order-by-aggregate/input';
import { WorkMinOrderByAggregateInput } from '../work-min-order-by-aggregate/input';

@InputType()
export class WorkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logoURL?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    readmeURL?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceCodeURL?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publishedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPublish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => WorkCountOrderByAggregateInput, {nullable:true})
    _count?: WorkCountOrderByAggregateInput;

    @Field(() => WorkMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkMaxOrderByAggregateInput;

    @Field(() => WorkMinOrderByAggregateInput, {nullable:true})
    _min?: WorkMinOrderByAggregateInput;
}
