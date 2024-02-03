import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './product.entity'

@Entity()
export class Prediction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column( "text", {array: true} )
    images: string[]

    @Column( "text", {array: true} )
    warning: string[]

    @Column( "text", {array: true} )
    more_info: string[]

    @Column()
    category: string

    @OneToMany(() => Product, (product) => product.prediction, {cascade: true})
    @JoinColumn({name: "fk_product_id"})
    products: Product[]
}
