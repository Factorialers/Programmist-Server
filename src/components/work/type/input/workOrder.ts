import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../../../../libs/prisma/generated/prisma/sort-order/enum';

@InputType()
export default class WorkOrderInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  publishedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isPublish?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
}
