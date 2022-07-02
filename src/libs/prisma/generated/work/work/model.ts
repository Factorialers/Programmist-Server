import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../../user/user/model';

@ObjectType()
export class Work {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => String, {nullable:false})
    logoURL!: string;

    @Field(() => String, {nullable:false})
    readmeURL!: string;

    @Field(() => [String], {nullable:true})
    sourceCodeURL!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    publishedAt!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPublish!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;
}
