import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWorksInput } from '../../user/user-create-nested-one-without-works/input';

@InputType()
export class WorkCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => String, {nullable:false})
    logoURL!: string;

    @Field(() => String, {nullable:false})
    readmeURL!: string;

    @Field(() => String, {nullable:false})
    licenseURL!: string;

    @Field(() => [String], {nullable:true})
    sourceCodeURL?: Array<string>;

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
