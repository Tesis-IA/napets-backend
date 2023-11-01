import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PestDiseaseDetails} from "./entities/pest-disease-details.entity";
import {Repository} from "typeorm";
import {HttpException} from "@nestjs/common/exceptions";

@Injectable()
export class PestDiseaseDetailsService {
    constructor(
        @InjectRepository(PestDiseaseDetails) private readonly pestDiseaseDetailsRepository: Repository<PestDiseaseDetails>
    ) {
    }

    async findPestAndDiseaseById(id: number) {
        const result = await this.pestDiseaseDetailsRepository.findOne( {
            where: {
              pest_disease: {
                  id
              }
            }
        })
        if (!result) {
            throw new HttpException('Pets or disease not found', 404)
        }
        return result
    }
}