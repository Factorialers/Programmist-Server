import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { Type } from 'class-transformer';
import { WorkUpdateWithoutUserInput } from '../work-update-without-user/input';
import { WorkCreateWithoutUserInput } from '../work-create-without-user/input';

@InputType()
export class WorkUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => WorkWhereUniqueInput, {nullable:false})
    @Type(() => WorkWhereUniqueInput)
    where!: WorkWhereUniqueInput;

    @Field(() => WorkUpdateWithoutUserInput, {nullable:false})
    @Type(() => WorkUpdateWithoutUserInput)
    update!: WorkUpdateWithoutUserInput;

    @Field(() => WorkCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkCreateWithoutUserInput)
    create!: WorkCreateWithoutUserInput;
}
