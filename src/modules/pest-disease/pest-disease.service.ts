import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PestDisease} from "./entities/pest-disease.entity";
import {Repository} from "typeorm";

@Injectable()
export class PestDiseaseService {
    constructor(
        @InjectRepository(PestDisease) private readonly pestDiseaseRepository: Repository<PestDisease>
    ) {
    }

    async findAllPestDisease(): Promise<PestDisease[]> {
        return await this.pestDiseaseRepository.find()
    }
}