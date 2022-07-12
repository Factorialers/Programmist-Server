import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkCreateInput } from '../work-create/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkArgs {

    @Field(() => WorkCreateInput, {nullable:false})
    @Type(() => WorkCreateInput)
    data!: WorkCreateInput;
}
