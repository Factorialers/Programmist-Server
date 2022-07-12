import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkCountAggregate } from '../work-count-aggregate/output';
import { WorkMinAggregate } from '../work-min-aggregate/output';
import { WorkMaxAggregate } from '../work-max-aggregate/output';

@ObjectType()
export class AggregateWork {

    @Field(() => WorkCountAggregate, {nullable:true})
    _count?: WorkCountAggregate;

    @Field(() => WorkMinAggregate, {nullable:true})
    _min?: WorkMinAggregate;

    @Field(() => WorkMaxAggregate, {nullable:true})
    _max?: WorkMaxAggregate;
}
