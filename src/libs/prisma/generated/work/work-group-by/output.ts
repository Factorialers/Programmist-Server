import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkCountAggregate } from '../work-count-aggregate/output';
import { WorkMinAggregate } from '../work-min-aggregate/output';
import { WorkMaxAggregate } from '../work-max-aggregate/output';

@ObjectType()
export class WorkGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => String, {nullable:false})
    logoURL!: string;

    @Field(() => String, {nullable:false})
    readmeURL!: string;

    @Field(() => [String], {nullable:true})
    sourceCodeURL?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isPublish!: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => WorkCountAggregate, {nullable:true})
    _count?: WorkCountAggregate;

    @Field(() => WorkMinAggregate, {nullable:true})
    _min?: WorkMinAggregate;

    @Field(() => WorkMaxAggregate, {nullable:true})
    _max?: WorkMaxAggregate;
}
