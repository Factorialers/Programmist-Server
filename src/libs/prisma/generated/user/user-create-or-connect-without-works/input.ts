import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWorksInput } from '../user-create-without-works/input';

@InputType()
export class UserCreateOrConnectWithoutWorksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWorksInput, {nullable:false})
    @Type(() => UserCreateWithoutWorksInput)
    create!: UserCreateWithoutWorksInput;
}
