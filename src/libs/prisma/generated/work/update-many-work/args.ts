import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkUpdateManyMutationInput } from '../work-update-many-mutation/input';
import { Type } from 'class-transformer';
import { WorkWhereInput } from '../work-where/input';

@ArgsType()
export class UpdateManyWorkArgs {

    @Field(() => WorkUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkUpdateManyMutationInput)
    data!: WorkUpdateManyMutationInput;

    @Field(() => WorkWhereInput, {nullable:true})
    @Type(() => WorkWhereInput)
    where?: WorkWhereInput;
}
