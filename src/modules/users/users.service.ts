import { Injectable } from '@nestjs/common'
import { HttpException } from '@nestjs/common/exceptions'

import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { RegisterDto } from '../auth/dto/register.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Users } from './entities/users.entity'
import { GuestDto } from '../auth/dto/guest.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepo: Repository<Users>
  ) {}

  async create(createUserDto: RegisterDto): Promise<RegisterDto> {
    const userExists = await this.userRepo.findOne({
      where: { email: createUserDto.email },
    })

    if (userExists) {
      throw new HttpException('El email ya se ecnuentra en uso', 400)
    }
    const user = this.userRepo.create(createUserDto)

    return await this.userRepo.save(user)
  }

  async createUserAsGuest(guestDto: GuestDto) {
    return await this.userRepo.save(guestDto)
  }

  async findAll(): Promise<Users[]> {
    return await this.userRepo.find()
  }

  async findLastHistoryByUserId(id: string) {
    const user = await this.userRepo.findOne({
      where: { device_id: id },
      relations: ['history'],
      order: {
        history: {
          created_at: "DESC"
        }
      }
    })
    if (!user.history[0]) {
      throw new HttpException('Aún no hay historial', 404)
    }
    return user.history[0]
  }

  async findUserById(id: string): Promise<Users> {
    const user = await this.userRepo.findOne({
      where: { device_id: id },
      relations: ['history']
    })

    if (!user) {
      throw new HttpException(`El usuario con el id ${id} no existe`, 404)
    }

    return user
  }

  async findUserByEmail(email: string): Promise<Users> {
    const user = await this.userRepo.findOne({ where: { email } })

    if (!user) {
      throw new HttpException(`El usuario con el correo ${email} no existe`, 404)
    }

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    const userExists = await this.findUserById(id)

    if (!userExists) {
      throw new HttpException(`El usuario con el id ${id} no existe`, 404)
    }

    const user = this.userRepo.merge(userExists, updateUserDto)

    return await this.userRepo.save(user)
  }

  async remove(id: string): Promise<Users> {
    const userExists = await this.findUserById(id)

    if (!userExists) {
      throw new HttpException(`El usuario con el id ${id} no existe`, 404)
    }

    return await this.userRepo.remove(userExists)
  }
}
