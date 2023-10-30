import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PestDisease} from "./entities/pest-disease.entity";
import {PestDiseaseController} from "./pest-disease.controller";
import {PestDiseaseService} from "./pest-disease.service";

@Module({
    imports: [TypeOrmModule.forFeature([PestDisease])],
    controllers: [PestDiseaseController],
    providers: [PestDiseaseService],
    exports: [PestDiseaseService]
})
export class PestDiseaseModule { }