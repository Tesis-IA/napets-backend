import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ProductDetails } from './product-details.entity'

@Entity()
export class ApplicationInstruction {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  @Column()
  image: string

  @ManyToOne(() => ProductDetails, (product_details) => product_details.application_instructions)
  @JoinColumn({name: "fk_product_details_id"})
  product_details: ProductDetails
}