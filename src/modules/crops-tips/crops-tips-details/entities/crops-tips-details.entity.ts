import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CropsTips} from "../../entities/crops-tips.entity";

@Entity()
export class CropsTipsDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    image: string

    @Column()
    description: string

    @Column()
    category: string

    @ManyToOne(() => CropsTips, (cropsTips) => cropsTips.id, { cascade: true })
    @JoinColumn({ name: 'fk_crops_tips_id'})
    cropsTips: CropsTips
}