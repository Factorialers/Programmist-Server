import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Work } from '../../work/work/model';
import { UserCount } from '../user-count/output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Work], {nullable:true})
    works?: Array<Work>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
