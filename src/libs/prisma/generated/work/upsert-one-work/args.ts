import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { Type } from 'class-transformer';
import { WorkCreateInput } from '../work-create/input';
import { WorkUpdateInput } from '../work-update/input';

@ArgsType()
export class UpsertOneWorkArgs {

    @Field(() => WorkWhereUniqueInput, {nullable:false})
    @Type(() => WorkWhereUniqueInput)
    where!: WorkWhereUniqueInput;

    @Field(() => WorkCreateInput, {nullable:false})
    @Type(() => WorkCreateInput)
    create!: WorkCreateInput;

    @Field(() => WorkUpdateInput, {nullable:false})
    @Type(() => WorkUpdateInput)
    update!: WorkUpdateInput;
}
