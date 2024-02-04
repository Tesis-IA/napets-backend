import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50, nullable: true })
  username?: string

  @Column({ length: 50, nullable: true })
  email?: string

  @Column({ length: 255, nullable: true })
  password?: string

  @Column({ length: 25, nullable: true })
  auth_strategy?: string

  @Column()
  device_id: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date
}
