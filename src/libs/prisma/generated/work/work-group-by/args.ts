import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkWhereInput } from '../work-where/input';
import { Type } from 'class-transformer';
import { WorkOrderByWithAggregationInput } from '../work-order-by-with-aggregation/input';
import { WorkScalarFieldEnum } from '../work-scalar-field/enum';
import { WorkScalarWhereWithAggregatesInput } from '../work-scalar-where-with-aggregates/input';
import { Int } from '@nestjs/graphql';
import { WorkCountAggregateInput } from '../work-count-aggregate/input';
import { WorkMinAggregateInput } from '../work-min-aggregate/input';
import { WorkMaxAggregateInput } from '../work-max-aggregate/input';

@ArgsType()
export class WorkGroupByArgs {

    @Field(() => WorkWhereInput, {nullable:true})
    @Type(() => WorkWhereInput)
    where?: WorkWhereInput;

    @Field(() => [WorkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkOrderByWithAggregationInput>;

    @Field(() => [WorkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkScalarFieldEnum>;

    @Field(() => WorkScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkCountAggregateInput, {nullable:true})
    _count?: WorkCountAggregateInput;

    @Field(() => WorkMinAggregateInput, {nullable:true})
    _min?: WorkMinAggregateInput;

    @Field(() => WorkMaxAggregateInput, {nullable:true})
    _max?: WorkMaxAggregateInput;
}
