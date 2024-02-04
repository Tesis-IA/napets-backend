import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from '../../users/entities/users.entity'

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column()
  diagnostic: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @ManyToOne(() => Users, (user) => user.device_id, {cascade: true})
  @JoinColumn()
  user: Users
}