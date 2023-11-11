import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CropsTipsDetailsViewMore} from "./entities/crops-tips-details-view-more.entity";
import {Repository} from "typeorm";
import {HttpException} from "@nestjs/common/exceptions";

@Injectable()
export class CropsTipsDetailsViewMoreService {
    constructor(
        @InjectRepository(CropsTipsDetailsViewMore) private readonly cropTipsDetailsViewMoreRepository: Repository<CropsTipsDetailsViewMore>
    ) {
    }

    async findAllCropsTipsViewMoreById(id: number) {
        const result = await this.cropTipsDetailsViewMoreRepository.find({
            where: {
                cropsTipsDetails: { id }
            }
        })
        if (!result || result.length === 0) {
            throw new HttpException('Crops tips details view more not found', 404)
        }
        return result
    }
}