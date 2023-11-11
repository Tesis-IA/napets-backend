import {Controller, Get, Param} from "@nestjs/common";
import {CropsTipsService} from "./crops-tips.service";
import {CropsTips} from "./entities/crops-tips.entity";
import {CropsTipsDetailsService} from "./crops-tips-details/crops-tips-details.service";
import {
    CropsTipsDetailsViewMoreService
} from "./crops-tips-details/crops-tips-details-view-more/crops-tips-details-view-more.service";

@Controller('crops-tips')
export class CropsTipsController {
    constructor(
        private readonly cropsTipsService: CropsTipsService,
        private readonly cropsTipsDetailsService: CropsTipsDetailsService,
        private readonly cropTipsDetailsViewMoreService: CropsTipsDetailsViewMoreService
    ) { }

    @Get()
    async findAllCropsTips(): Promise<CropsTips[]> {
        return this.cropsTipsService.findAllCropsTips()
    }

    @Get(':id')
    async findCropsTipsById(@Param('id') id: string) {
        return this.cropsTipsDetailsService.findCropTipsDetailsById(+id)
    }

    @Get('view-more/:id')
    async findCropsTipsDetailsViewMore(@Param('id') id: string) {
        return this.cropTipsDetailsViewMoreService.findAllCropsTipsViewMoreById(+id)
    }
}