import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { History } from './entitties/history.entity'
import { HistoryController } from './history.controller'
import { HistoryService } from './history.service'
import { UsersService } from '../users/users.service'
import { UsersController } from '../users/users.controller'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [TypeOrmModule.forFeature([History]), UsersModule],
  controllers: [HistoryController],
  providers: [HistoryService],
  exports: [HistoryService]
})
export class HistoryModule { }