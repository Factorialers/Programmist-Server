import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorksInput } from '../user-create-without-works/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWorksInput } from '../user-create-or-connect-without-works/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';

@InputType()
export class UserCreateNestedOneWithoutWorksInput {

    @Field(() => UserCreateWithoutWorksInput, {nullable:true})
    @Type(() => UserCreateWithoutWorksInput)
    create?: UserCreateWithoutWorksInput;

    @Field(() => UserCreateOrConnectWithoutWorksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWorksInput)
    connectOrCreate?: UserCreateOrConnectWithoutWorksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
