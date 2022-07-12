import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkUncheckedCreateNestedManyWithoutUserInput } from '../../work/work-unchecked-create-nested-many-without-user/input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => WorkUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    works?: WorkUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
