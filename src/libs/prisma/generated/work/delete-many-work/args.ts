import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkWhereInput } from '../work-where/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkArgs {

    @Field(() => WorkWhereInput, {nullable:true})
    @Type(() => WorkWhereInput)
    where?: WorkWhereInput;
}
