import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkUpdateInput } from '../work-update/input';
import { Type } from 'class-transformer';
import { WorkWhereUniqueInput } from '../work-where-unique/input';

@ArgsType()
export class UpdateOneWorkArgs {

    @Field(() => WorkUpdateInput, {nullable:false})
    @Type(() => WorkUpdateInput)
    data!: WorkUpdateInput;

    @Field(() => WorkWhereUniqueInput, {nullable:false})
    @Type(() => WorkWhereUniqueInput)
    where!: WorkWhereUniqueInput;
}
