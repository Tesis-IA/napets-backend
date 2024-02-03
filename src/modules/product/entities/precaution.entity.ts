import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ProductDetails } from './product-details.entity'

@Entity()
export class Precaution {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column()
  description: string

  @ManyToOne(() => ProductDetails, (product_details) => product_details.precautions)
  @JoinColumn({name: "fk_product_details_id"})
  product_details: ProductDetails
}