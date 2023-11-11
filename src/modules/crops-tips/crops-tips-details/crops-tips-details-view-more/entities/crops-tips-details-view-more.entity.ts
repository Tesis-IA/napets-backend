import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {CropsTipsDetails} from "../../entities/crops-tips-details.entity";

@Entity()
export class CropsTipsDetailsViewMore {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    image: string

    @Column()
    description: string

    @ManyToOne(() => CropsTipsDetails, (cropsTipsDetails) => cropsTipsDetails.id, { cascade: true})
    @JoinColumn({ name: 'fk_crops_tips_details_id' })
    cropsTipsDetails: CropsTipsDetails
}