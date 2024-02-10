import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { History } from './entitties/history.entity'
import { Repository } from 'typeorm'
import { HistoryDto } from './dto/history.dto'
import { Users } from '../users/entities/users.entity'
import { UsersService } from '../users/users.service'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History) private readonly historyRepository: Repository<History>,
    @Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService
  ) { }

  async saveHistory(deviceId: string, historyDto: HistoryDto) {
    const user = await this.usersService.findUserById(deviceId)
    if (!user) {
      throw new HttpException("User not found", 404)
    }
    const history = this.historyRepository.create(historyDto)
    history.user = user
    await this.historyRepository.save(history)
  }

  async findHistoryByUserId(id: number) {
    return await this.historyRepository.find({
      where: { id }
    })
  }

  async findAll() {
    return await this.historyRepository.find()
  }
}