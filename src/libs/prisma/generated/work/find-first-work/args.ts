import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkWhereInput } from '../work-where/input';
import { Type } from 'class-transformer';
import { WorkOrderByWithRelationInput } from '../work-order-by-with-relation/input';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { Int } from '@nestjs/graphql';
import { WorkScalarFieldEnum } from '../work-scalar-field/enum';

@ArgsType()
export class FindFirstWorkArgs {

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

    @Field(() => [WorkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkScalarFieldEnum>;
}
