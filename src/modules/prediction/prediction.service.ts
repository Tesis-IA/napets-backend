import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Prediction} from "./entities/prediction.entity";
import {Repository} from "typeorm";

@Injectable()
export class PredictionService {
    constructor(
        @InjectRepository(Prediction) private readonly predictionRepository: Repository<Prediction>
    ) {
    }

    async getPrediction()  {

    }
}