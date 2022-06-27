import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { Type } from 'class-transformer';
import { WorkCreateWithoutUserInput } from '../work-create-without-user/input';

@InputType()
export class WorkCreateOrConnectWithoutUserInput {

    @Field(() => WorkWhereUniqueInput, {nullable:false})
    @Type(() => WorkWhereUniqueInput)
    where!: WorkWhereUniqueInput;

    @Field(() => WorkCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkCreateWithoutUserInput)
    create!: WorkCreateWithoutUserInput;
}
