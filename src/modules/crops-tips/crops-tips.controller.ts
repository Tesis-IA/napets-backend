import {Controller, Get, Param} from "@nestjs/common";
import {CropsTipsService} from "./crops-tips.service";
import {CropsTips} from "./entities/crops-tips.entity";
import {CropsTipsDetailsService} from "./crops-tips-details/crops-tips-details.service";

@Controller('crops-tips')
export class CropsTipsController {
    constructor(
        private readonly cropsTipsService: CropsTipsService,
        private readonly cropsTipsDetailsService: CropsTipsDetailsService
    ) { }

    @Get()
    async findAllCropsTips(): Promise<CropsTips[]> {
        return this.cropsTipsService.findAllCropsTips()
    }

    @Get(':id')
    async findCropsTipsById(@Param('id') id: string) {
        return this.cropsTipsDetailsService.findCropTipsDetailsById(+id)
    }
}