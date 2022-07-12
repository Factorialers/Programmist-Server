import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkScalarWhereInput } from '../work-scalar-where/input';
import { Type } from 'class-transformer';
import { WorkUpdateManyMutationInput } from '../work-update-many-mutation/input';

@InputType()
export class WorkUpdateManyWithWhereWithoutUserInput {

    @Field(() => WorkScalarWhereInput, {nullable:false})
    @Type(() => WorkScalarWhereInput)
    where!: WorkScalarWhereInput;

    @Field(() => WorkUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkUpdateManyMutationInput)
    data!: WorkUpdateManyMutationInput;
}
