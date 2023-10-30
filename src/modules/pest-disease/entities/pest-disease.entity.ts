import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class PestDisease {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @Column()
    category: string
}
