import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorksInput } from '../user-create-without-works/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWorksInput } from '../user-create-or-connect-without-works/input';
import { UserUpsertWithoutWorksInput } from '../user-upsert-without-works/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { UserUpdateWithoutWorksInput } from '../user-update-without-works/input';

@InputType()
export class UserUpdateOneRequiredWithoutWorksNestedInput {

    @Field(() => UserCreateWithoutWorksInput, {nullable:true})
    @Type(() => UserCreateWithoutWorksInput)
    create?: UserCreateWithoutWorksInput;

    @Field(() => UserCreateOrConnectWithoutWorksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWorksInput)
    connectOrCreate?: UserCreateOrConnectWithoutWorksInput;

    @Field(() => UserUpsertWithoutWorksInput, {nullable:true})
    @Type(() => UserUpsertWithoutWorksInput)
    upsert?: UserUpsertWithoutWorksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWorksInput, {nullable:true})
    @Type(() => UserUpdateWithoutWorksInput)
    update?: UserUpdateWithoutWorksInput;
}
