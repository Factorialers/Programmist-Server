import { Module } from '@nestjs/common';
import WorkMutation from './work.resolver.mutation';
import WorkQuery from './work.resolver.query';
import WorkService from './work.service';

@Module({
  providers: [WorkQuery, WorkMutation, WorkService],
})
export default class WorkModule {}
