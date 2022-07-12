import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkCreateManyUserInput } from '../work-create-many-user/input';
import { Type } from 'class-transformer';

@InputType()
export class WorkCreateManyUserInputEnvelope {

    @Field(() => [WorkCreateManyUserInput], {nullable:false})
    @Type(() => WorkCreateManyUserInput)
    data!: Array<WorkCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
