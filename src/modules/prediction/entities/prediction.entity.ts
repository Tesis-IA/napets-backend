import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Prediction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    class_name: string
}