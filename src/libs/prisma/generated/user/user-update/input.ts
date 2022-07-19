import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkUpdateManyWithoutUserNestedInput } from '../../work/work-update-many-without-user-nested/input';

@InputType()
export class UserUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => WorkUpdateManyWithoutUserNestedInput, {nullable:true})
    works?: WorkUpdateManyWithoutUserNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
