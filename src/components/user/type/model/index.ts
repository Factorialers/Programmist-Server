import { ObjectType, Field } from '@nestjs/graphql';
import NestedWork from '../../../work/type/model/model.nested';

@ObjectType()
export default class User {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => [NestedWork], { nullable: false })
  works: NestedWork[];

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
