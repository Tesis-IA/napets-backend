import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CropsTips} from "./entities/crops-tips.entity";
import {CropsTipsController} from "./crops-tips.controller";
import {CropsTipsService} from "./crops-tips.service";
import {CropsTipsDetailsService} from "./crops-tips-details/crops-tips-details.service";
import {CropsTipsDetails} from "./crops-tips-details/entities/crops-tips-details.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CropsTips, CropsTipsDetails])],
    controllers: [CropsTipsController],
    providers: [CropsTipsService, CropsTipsDetailsService],
    exports: [CropsTipsService]
})
export class CropsTipsModule { }