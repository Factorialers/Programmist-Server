import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserUpdateWithoutWorksInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
