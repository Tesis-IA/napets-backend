import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Prediction} from "./entities/prediction.entity";
import {PredictionController} from "./prediction.controller";
import {PredictionService} from "./prediction.service";

@Module({
    imports: [TypeOrmModule.forFeature([Prediction])],
    controllers: [PredictionController],
    providers: [PredictionService],
    exports: [PredictionService]
})
export class PredictionModule { }