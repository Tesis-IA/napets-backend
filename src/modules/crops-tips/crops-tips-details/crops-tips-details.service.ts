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
                cropsTips: { id },
            },
            order: {
                id: 'ASC'
            }
        })
        if (!result || result.length === 0) {
            throw new HttpException('Aún no se han registrado los detalles.', 404)
        }
        return result
    }
}