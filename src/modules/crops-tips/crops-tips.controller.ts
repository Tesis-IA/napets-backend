import {Controller, Get} from "@nestjs/common";
import {CropsTipsService} from "./crops-tips.service";
import {CropsTips} from "./entities/crops-tips.entity";

@Controller('crops-tips')
export class CropsTipsController {
    constructor(private readonly cropsTipsService: CropsTipsService) { }

    @Get()
    async findAllCropsTips(): Promise<CropsTips[]> {
        return this.cropsTipsService.findAllCropsTips()
    }
}