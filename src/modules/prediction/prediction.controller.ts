import {Controller, Post} from "@nestjs/common";
import {PredictionService} from "./prediction.service";

@Controller('prediction')
export class PredictionController {
    constructor(private readonly predictionService: PredictionService) { }

    // @Post()
    // async makePrediction(re)
}