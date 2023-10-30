import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";

@Entity()
export class Prediction {
    @PrimaryGeneratedColumn()
    id: number

    @Column("int", { array: true})
    class_code: number[]

    @Column()
    class_name: string
}