import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { Type } from 'class-transformer';
import { WorkUpdateWithoutUserInput } from '../work-update-without-user/input';

@InputType()
export class WorkUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => WorkWhereUniqueInput, {nullable:false})
    @Type(() => WorkWhereUniqueInput)
    where!: WorkWhereUniqueInput;

    @Field(() => WorkUpdateWithoutUserInput, {nullable:false})
    @Type(() => WorkUpdateWithoutUserInput)
    data!: WorkUpdateWithoutUserInput;
}
