import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '../../libs/prisma/prisma.service';

@Injectable()
export default class UserService {
  constructor(private prisma: PrismaService) {}

  async findUser(args: { where: Prisma.UserWhereUniqueInput }) {
    const { where } = args;

    return this.prisma.user.findUnique({
      where,
      include: { works: { include: { user: true } } },
    });
  }

  async findUsers(args?: {
    where?: Prisma.UserWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput[];
    distinct?: Prisma.UserScalarFieldEnum[];
  }) {
    const { where, skip, take, cursor, orderBy, distinct } = args || {};

    return this.prisma.user.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
      distinct,
      include: { works: { include: { user: true } } },
    });
  }

  async create(args: { data: Prisma.UserCreateInput }) {
    const { data } = args;

    return this.prisma.user.create({
      data,
      include: { works: { include: { user: true } } },
    });
  }

  async update(args: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }) {
    const { where, data } = args;

    return this.prisma.user.update({
      where,
      data,
      include: { works: { include: { user: true } } },
    });
  }

  async delete(args: { where: Prisma.UserWhereUniqueInput }) {
    const { where } = args;

    const deleteWorks = this.prisma.work.deleteMany({ where: { userId: where.id } });
    const deleteUser = this.prisma.user.delete({
      where,
      include: { works: { include: { user: true } } },
    });

    const [, deletedUser] = await this.prisma.$transaction([deleteWorks, deleteUser]);

    return deletedUser;
  }
}
