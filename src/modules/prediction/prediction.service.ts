import { forwardRef, Inject, Injectable } from '@nestjs/common'
import {InjectRepository} from "@nestjs/typeorm";
import {Prediction} from "./entities/prediction.entity";
import {Repository} from "typeorm";
import { CreatePredictionDto } from './dto/create-prediction'
import { HttpService } from '@nestjs/axios'
import { API_IA_URL } from '../../utils/constant'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'
import { HttpException } from '@nestjs/common/exceptions'
import { PredictionDTO } from './dto/prediction'
import { HistoryService } from '../history/history.service'
import { HistoryDto } from '../history/dto/history.dto'

@Injectable()
export class PredictionService {
    constructor(
        @InjectRepository(Prediction) private readonly predictionRepository: Repository<Prediction>,
        @Inject(forwardRef(() => HistoryService)) private readonly historyService: HistoryService,
        private readonly httpService: HttpService
    ) {
    }

    async makePrediction(deviceId: string, createPredictionDto: CreatePredictionDto) {
      const { data } = await firstValueFrom(
          this.httpService.post<PredictionDTO>(API_IA_URL, createPredictionDto).pipe(
            catchError((err: AxiosError) => {
              throw new HttpException(`An occurred when trying get prediction from IA model: ${err}`, 404)
            })
          )
        )
      const predictionResult =  await this.predictionRepository.findOne({
        where: {
          id: data.id
        },
        relations: ['products']
      })
      await this.saveHistoryPrediction(
        deviceId,
        {
          image: predictionResult.images,
          diagnostic: predictionResult.description
        }
      )
      return predictionResult
    }

    async saveHistoryPrediction(deviceId: string, historyDto: HistoryDto) {
      await this.historyService.saveHistory(deviceId, historyDto)
    }
}