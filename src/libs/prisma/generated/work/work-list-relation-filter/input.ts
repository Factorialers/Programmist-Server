import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkWhereInput } from '../work-where/input';

@InputType()
export class WorkListRelationFilter {

    @Field(() => WorkWhereInput, {nullable:true})
    every?: WorkWhereInput;

    @Field(() => WorkWhereInput, {nullable:true})
    some?: WorkWhereInput;

    @Field(() => WorkWhereInput, {nullable:true})
    none?: WorkWhereInput;
}
