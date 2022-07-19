import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkCreateManyInput } from '../work-create-many/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkArgs {

    @Field(() => [WorkCreateManyInput], {nullable:false})
    @Type(() => WorkCreateManyInput)
    data!: Array<WorkCreateManyInput>;
}
