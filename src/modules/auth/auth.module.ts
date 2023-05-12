import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from '../users/entities/users.entity'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [TypeOrmModule.forFeature([Users]), UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
