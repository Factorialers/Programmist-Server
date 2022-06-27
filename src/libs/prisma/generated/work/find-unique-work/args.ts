import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWorkArgs {

    @Field(() => WorkWhereUniqueInput, {nullable:false})
    @Type(() => WorkWhereUniqueInput)
    where!: WorkWhereUniqueInput;
}
