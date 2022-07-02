import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '../../libs/prisma/prisma.service';

@Injectable()
export default class WorkService {
  constructor(private prisma: PrismaService) {}

  async findWork(args: { where: Prisma.WorkWhereUniqueInput }) {
    const { where } = args;

    return this.prisma.work.findUnique({
      where,
      include: { user: { include: { works: true } } },
    });
  }

  async findWorks(args?: {
    where?: Prisma.WorkWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.WorkWhereUniqueInput;
    orderBy?: Prisma.WorkOrderByWithAggregationInput[];
    distinct?: Prisma.WorkScalarFieldEnum[];
  }) {
    const { where, skip, take, cursor, orderBy, distinct } = args || {};

    return this.prisma.work.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
      distinct,
      include: { user: { include: { works: true } } },
    });
  }

  async create(args: { data: Prisma.WorkCreateInput }) {
    const { data } = args;

    return this.prisma.work.create({
      data,
      include: { user: { include: { works: true } } },
    });
  }

  async update(args: { where: Prisma.WorkWhereUniqueInput; data: Prisma.WorkUpdateInput }) {
    const { where, data } = args;

    return this.prisma.work.update({
      where,
      data,
      include: { user: { include: { works: true } } },
    });
  }

  async delete(args: { where: Prisma.WorkWhereUniqueInput }) {
    const { where } = args;

    return this.prisma.work.delete({
      where,
      include: { user: { include: { works: true } } },
    });
  }
}
