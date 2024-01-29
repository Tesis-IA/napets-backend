import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Prediction} from "./entities/prediction.entity";
import {Repository} from "typeorm";
import { CreatePredictionDto } from './dto/create-prediction'
import { HttpService } from '@nestjs/axios'
import { API_IA_URL } from '../../utils/constant'
import { AxiosResponse } from 'axios'
import { map, Observable, tap } from 'rxjs'

@Injectable()
export class PredictionService {
    constructor(
        @InjectRepository(Prediction) private readonly predictionRepository: Repository<Prediction>,
        private readonly httpService: HttpService
    ) {
    }

    async makePrediction(createPredictionDto: CreatePredictionDto): Promise<Observable<AxiosResponse<any>>> {
        const data = this.httpService.post(API_IA_URL, createPredictionDto).pipe(
          tap((resp) => console.log(resp)),
          map((resp) => resp.data),
          tap((data) =>  console.log(data)),
        );
        console.log(data)
        return data
    }
}