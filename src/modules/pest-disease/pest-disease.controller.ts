import {Controller, Get} from "@nestjs/common";
import {PestDiseaseService} from "./pest-disease.service";
import {PestDisease} from "./entities/pest-disease.entity";

@Controller('pest-disease')
export class PestDiseaseController {
    constructor(private readonly pestDiseaseService: PestDiseaseService) { }

    @Get()
    async getPestDisease(): Promise<PestDisease[]> {
        return this.pestDiseaseService.getPestDisease()
    }
}