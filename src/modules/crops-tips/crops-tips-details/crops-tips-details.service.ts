import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CropsTipsDetails} from "./entities/crops-tips-details.entity";
import {Repository} from "typeorm";
import {HttpException} from "@nestjs/common/exceptions";

@Injectable()
export class CropsTipsDetailsService {
    constructor(
        @InjectRepository(CropsTipsDetails) private readonly cropTipsDetailsRepository: Repository<CropsTipsDetails>
    ) {
    }

    async findCropTipsDetailsById(id: number) {
        const result = await this.cropTipsDetailsRepository.find({
            where: {
                cropsTips: { id }
            }
        })
        if (!result || result.length === 0) {
            throw new HttpException('Crops tips details not found', 404)
        }
        return result
    }
}