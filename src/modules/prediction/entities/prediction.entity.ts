import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Prediction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    warning: string

    @Column( "text", {array: true} )
    more_info: string[]

    @Column()
    category: string
}
