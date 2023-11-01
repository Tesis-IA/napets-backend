import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}
