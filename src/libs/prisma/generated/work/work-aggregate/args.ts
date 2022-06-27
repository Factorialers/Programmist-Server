import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkWhereInput } from '../work-where/input';
import { Type } from 'class-transformer';
import { WorkOrderByWithRelationInput } from '../work-order-by-with-relation/input';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { Int } from '@nestjs/graphql';
import { WorkCountAggregateInput } from '../work-count-aggregate/input';
import { WorkMinAggregateInput } from '../work-min-aggregate/input';
import { WorkMaxAggregateInput } from '../work-max-aggregate/input';

@ArgsType()
export class WorkAggregateArgs {

    @Field(() => WorkWhereInput, {nullable:true})
    @Type(() => WorkWhereInput)
    where?: WorkWhereInput;

    @Field(() => [WorkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkOrderByWithRelationInput>;

    @Field(() => WorkWhereUniqueInput, {nullable:true})
    cursor?: WorkWhereUniqueInput;

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
