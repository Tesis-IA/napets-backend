import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class WeatherKeyEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  key: string
}