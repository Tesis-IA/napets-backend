import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CropsTips} from "./entities/crops-tips.entity";
import {CropsTipsController} from "./crops-tips.controller";
import {CropsTipsService} from "./crops-tips.service";
import {CropsTipsDetailsService} from "./crops-tips-details/crops-tips-details.service";
import {CropsTipsDetails} from "./crops-tips-details/entities/crops-tips-details.entity";
import {
    CropsTipsDetailsViewMoreService
} from "./crops-tips-details/crops-tips-details-view-more/crops-tips-details-view-more.service";
import {
    CropsTipsDetailsViewMore
} from "./crops-tips-details/crops-tips-details-view-more/entities/crops-tips-details-view-more.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CropsTips, CropsTipsDetails, CropsTipsDetailsViewMore])],
    controllers: [CropsTipsController],
    providers: [CropsTipsService, CropsTipsDetailsService, CropsTipsDetailsViewMoreService],
    exports: [CropsTipsService]
})
export class CropsTipsModule { }