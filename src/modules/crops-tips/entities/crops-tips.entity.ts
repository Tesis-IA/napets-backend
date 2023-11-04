import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CropsTipsDetails} from "../crops-tips-details/entities/crops-tips-details.entity";

@Entity()
export class CropsTips {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @Column()
    background: string

    @Column()
    shape_background: string

    @OneToMany(() => CropsTipsDetails, (cropsTipsDetails) => cropsTipsDetails.id, { cascade: true })
    @JoinColumn({name: 'fk_crops_tips_details_id'})
    cropsTipsDetails: CropsTipsDetails[]
}
