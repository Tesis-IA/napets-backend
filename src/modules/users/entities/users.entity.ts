import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  username: string

  @Column({ length: 50 })
  email: string

  @Column({ length: 255 })
  password: string

  @Column({ length: 25, nullable: true })
  auth_strategy: string

  @Column({ type: 'timestamp' })
  created_at: Date
}
