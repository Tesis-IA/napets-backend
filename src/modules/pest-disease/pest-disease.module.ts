import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PestDisease} from "./entities/pest-disease.entity";
import {PestDiseaseController} from "./pest-disease.controller";
import {PestDiseaseService} from "./pest-disease.service";
import {PestDiseaseDetailsService} from "./details/pest-disease-details.service";
import {PestDiseaseDetails} from "./details/entities/pest-disease-details.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PestDisease, PestDiseaseDetails])],
    controllers: [PestDiseaseController],
    providers: [PestDiseaseService, PestDiseaseDetailsService],
    exports: [PestDiseaseService]
})
export class PestDiseaseModule { }