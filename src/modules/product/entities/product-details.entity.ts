import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Precaution } from './precaution.entity'
import { ApplicationInstruction } from './application-instruction.entity'
import { Product } from './product.entity'

@Entity()
export class ProductDetails {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Precaution, (precaution) => precaution.product_details, {cascade: true})
  @JoinColumn({name: "fk_precaution_id"})
  precautions: Precaution[]

  @OneToMany(() => ApplicationInstruction, (application_instructions) => application_instructions.product_details, {cascade: true})
  @JoinColumn({name: "fk_application_instructions"})
  application_instructions: ApplicationInstruction[]

  @OneToOne(() => Product, (product) => product.id, {cascade: true})
  @JoinColumn({name: "fk_product_id"})
  product: Product
}