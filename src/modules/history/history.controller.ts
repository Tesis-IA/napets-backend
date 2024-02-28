import { Controller, Get, Param } from '@nestjs/common'
import { HistoryService } from './history.service'

@Controller('history')
export class HistoryController {
  constructor(
    private readonly historyService: HistoryService
  ) {
  }

  @Get()
  async findAllHistory() {
    return this.historyService.findAll()
  }

  @Get(':id')
  async findHistoryById(@Param('id') id: string) {
    return this.historyService.findHistoryById(+id)
  }

  @Get('last-history/:id')
  async findLastHistoryByUserId(@Param('id') id: string) {
    return this.historyService.findLastHistoryByUserId(id)
  }

  @Get('user/:id')
  async findHistoryByUserId(
    @Param('id') id: string
  ) {
    return this.historyService.findHistoryByUserId(id)
  }
}