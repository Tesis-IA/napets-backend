import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Prediction } from './prediction.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  category: string

  @Column()
  image: string

  @Column()
  name: string

  @Column()
  where_founded: string

  @ManyToOne(() => Prediction, (prediction) => prediction.products)
  @JoinColumn({ name: "fk_prediction_id"})
  prediction: Prediction
}