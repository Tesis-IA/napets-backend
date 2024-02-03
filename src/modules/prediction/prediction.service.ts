import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Prediction} from "./entities/prediction.entity";
import {Repository} from "typeorm";
import { CreatePredictionDto } from './dto/create-prediction'
import { HttpService } from '@nestjs/axios'
import { API_IA_URL } from '../../utils/constant'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom, tap } from 'rxjs'
import { HttpException } from '@nestjs/common/exceptions'
import { PredictionDTO } from './dto/prediction'

@Injectable()
export class PredictionService {
    constructor(
        @InjectRepository(Prediction) private readonly predictionRepository: Repository<Prediction>,
        private readonly httpService: HttpService
    ) {
    }

    async makePrediction(createPredictionDto: CreatePredictionDto) {
      const { data } = await firstValueFrom(
          this.httpService.post<PredictionDTO>(API_IA_URL, createPredictionDto).pipe(
            catchError((err: AxiosError) => {
              throw new HttpException(`An occurred when trying get prediction from IA model: ${err}`, 404)
            })
          )
        )
      return await this.predictionRepository.findOne({
        where: {
          id: data.id
        },
        relations: ['products']
      })
    }
}