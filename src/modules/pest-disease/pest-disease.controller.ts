import {Controller, Get, Param} from "@nestjs/common";
import {PestDiseaseService} from "./pest-disease.service";
import {PestDisease} from "./entities/pest-disease.entity";
import {PestDiseaseDetailsService} from "./details/pest-disease-details.service";

@Controller('pest-disease')
export class PestDiseaseController {
    constructor(private readonly pestDiseaseService: PestDiseaseService,
                private readonly pestDiseaseDetailsService: PestDiseaseDetailsService) { }

    @Get()
    async findAllPestDisease(): Promise<PestDisease[]> {
        return this.pestDiseaseService.findAllPestDisease()
    }

    @Get(':id')
    async findPestDiseaseDetailById(@Param('id') id: string) {
        return this.pestDiseaseDetailsService.findPestAndDiseaseById(+id)
    }
}