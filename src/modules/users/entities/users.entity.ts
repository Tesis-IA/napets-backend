import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { History } from '../../history/entitties/history.entity'

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

  @OneToMany(() => History, (history_entity) => history_entity.user, {cascade: true})
  history: History[]
}
