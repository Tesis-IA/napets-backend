import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Prediction} from "./entities/prediction.entity";
import {PredictionController} from "./prediction.controller";
import {PredictionService} from "./prediction.service";
import { HttpModule } from '@nestjs/axios'
import { Product } from '../product/entities/product.entity'
import { HistoryModule } from '../history/history.module'

@Module({
    imports: [TypeOrmModule.forFeature([Prediction, Product]), HttpModule, HistoryModule],
    controllers: [PredictionController],
    providers: [PredictionService],
    exports: [PredictionService]
})
export class PredictionModule { }