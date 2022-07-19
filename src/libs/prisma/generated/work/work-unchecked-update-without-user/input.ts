import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkUncheckedUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => String, {nullable:true})
    logoURL?: string;

    @Field(() => String, {nullable:true})
    readmeURL?: string;

    @Field(() => String, {nullable:true})
    licenseURL?: string;

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
}
