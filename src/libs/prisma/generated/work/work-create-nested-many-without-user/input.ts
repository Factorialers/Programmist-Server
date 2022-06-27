import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkCreateWithoutUserInput } from '../work-create-without-user/input';
import { Type } from 'class-transformer';
import { WorkCreateOrConnectWithoutUserInput } from '../work-create-or-connect-without-user/input';
import { WorkCreateManyUserInputEnvelope } from '../work-create-many-user-input-envelope/input';
import { WorkWhereUniqueInput } from '../work-where-unique/input';

@InputType()
export class WorkCreateNestedManyWithoutUserInput {

    @Field(() => [WorkCreateWithoutUserInput], {nullable:true})
    @Type(() => WorkCreateWithoutUserInput)
    create?: Array<WorkCreateWithoutUserInput>;

    @Field(() => [WorkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WorkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WorkCreateOrConnectWithoutUserInput>;

    @Field(() => WorkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WorkCreateManyUserInputEnvelope)
    createMany?: WorkCreateManyUserInputEnvelope;

    @Field(() => [WorkWhereUniqueInput], {nullable:true})
    @Type(() => WorkWhereUniqueInput)
    connect?: Array<WorkWhereUniqueInput>;
}
