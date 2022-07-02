import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkCreatetagsInput } from '../work-createtags/input';
import { WorkCreatesourceCodeURLInput } from '../work-createsource-code-url/input';
import { UserCreateNestedOneWithoutWorksInput } from '../../user/user-create-nested-one-without-works/input';

@InputType()
export class WorkCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => WorkCreatetagsInput, {nullable:true})
    tags?: WorkCreatetagsInput;

    @Field(() => String, {nullable:false})
    logoURL!: string;

    @Field(() => String, {nullable:false})
    readmeURL!: string;

    @Field(() => WorkCreatesourceCodeURLInput, {nullable:true})
    sourceCodeURL?: WorkCreatesourceCodeURLInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isPublish?: boolean;

    @Field(() => UserCreateNestedOneWithoutWorksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutWorksInput;
}