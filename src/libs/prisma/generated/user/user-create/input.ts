import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkCreateNestedManyWithoutUserInput } from '../../work/work-create-nested-many-without-user/input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => WorkCreateNestedManyWithoutUserInput, {nullable:true})
    works?: WorkCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
