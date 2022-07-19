import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkUncheckedUpdateManyWithoutUserNestedInput } from '../../work/work-unchecked-update-many-without-user-nested/input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => WorkUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    works?: WorkUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
