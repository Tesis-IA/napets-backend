import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CropsTips} from "./entities/crops-tips.entity";
import {CropsTipsController} from "./crops-tips.controller";
import {CropsTipsService} from "./crops-tips.service";

@Module({
    imports: [TypeOrmModule.forFeature([CropsTips])],
    controllers: [CropsTipsController],
    providers: [CropsTipsService],
    exports: [CropsTipsService]
})
export class CropsTipsModule { }