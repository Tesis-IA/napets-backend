import { Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Subjects {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    image: string
}