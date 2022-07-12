import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWorksInput } from '../user-update-without-works/input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWorksInput } from '../user-create-without-works/input';

@InputType()
export class UserUpsertWithoutWorksInput {

    @Field(() => UserUpdateWithoutWorksInput, {nullable:false})
    @Type(() => UserUpdateWithoutWorksInput)
    update!: UserUpdateWithoutWorksInput;

    @Field(() => UserCreateWithoutWorksInput, {nullable:false})
    @Type(() => UserCreateWithoutWorksInput)
    create!: UserCreateWithoutWorksInput;
}
