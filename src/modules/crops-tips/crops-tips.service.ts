import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CropsTips} from "./entities/crops-tips.entity";
import {Repository} from "typeorm";

@Injectable()
export class CropsTipsService {
    constructor(
        @InjectRepository(CropsTips) private readonly cropsTipsRepository: Repository<CropsTips>
    ) {
    }

    async findAllCropsTips(): Promise<CropsTips[]> {
        return await this.cropsTipsRepository.find()
    }
}