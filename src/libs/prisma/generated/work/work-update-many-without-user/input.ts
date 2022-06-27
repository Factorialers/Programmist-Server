import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkCreateWithoutUserInput } from '../work-create-without-user/input';
import { Type } from 'class-transformer';
import { WorkCreateOrConnectWithoutUserInput } from '../work-create-or-connect-without-user/input';
import { WorkUpsertWithWhereUniqueWithoutUserInput } from '../work-upsert-with-where-unique-without-user/input';
import { WorkCreateManyUserInputEnvelope } from '../work-create-many-user-input-envelope/input';
import { WorkWhereUniqueInput } from '../work-where-unique/input';
import { WorkUpdateWithWhereUniqueWithoutUserInput } from '../work-update-with-where-unique-without-user/input';
import { WorkUpdateManyWithWhereWithoutUserInput } from '../work-update-many-with-where-without-user/input';
import { WorkScalarWhereInput } from '../work-scalar-where/input';

@InputType()
export class WorkUpdateManyWithoutUserInput {

    @Field(() => [WorkCreateWithoutUserInput], {nullable:true})
    @Type(() => WorkCreateWithoutUserInput)
    create?: Array<WorkCreateWithoutUserInput>;

    @Field(() => [WorkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WorkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<WorkCreateOrConnectWithoutUserInput>;

    @Field(() => [WorkUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WorkUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<WorkUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => WorkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WorkCreateManyUserInputEnvelope)
    createMany?: WorkCreateManyUserInputEnvelope;

    @Field(() => [WorkWhereUniqueInput], {nullable:true})
    @Type(() => WorkWhereUniqueInput)
    set?: Array<WorkWhereUniqueInput>;

    @Field(() => [WorkWhereUniqueInput], {nullable:true})
    @Type(() => WorkWhereUniqueInput)
    disconnect?: Array<WorkWhereUniqueInput>;

    @Field(() => [WorkWhereUniqueInput], {nullable:true})
    @Type(() => WorkWhereUniqueInput)
    delete?: Array<WorkWhereUniqueInput>;

    @Field(() => [WorkWhereUniqueInput], {nullable:true})
    @Type(() => WorkWhereUniqueInput)
    connect?: Array<WorkWhereUniqueInput>;

    @Field(() => [WorkUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WorkUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<WorkUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [WorkUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => WorkUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<WorkUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [WorkScalarWhereInput], {nullable:true})
    @Type(() => WorkScalarWhereInput)
    deleteMany?: Array<WorkScalarWhereInput>;
}
