import { InputType,Field  } from '@nestjs/graphql';
import WorkWhereInput from "./workWhere"

@InputType()
export default class WorkListRelationFilter {
    @Field(() => WorkWhereInput, {nullable:true})
    every?: WorkWhereInput;

    @Field(() => WorkWhereInput, {nullable:true})
    some?: WorkWhereInput;

    @Field(() => WorkWhereInput, {nullable:true})
    none?: WorkWhereInput;
}
