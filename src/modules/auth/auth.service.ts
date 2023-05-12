import { Injectable } from '@nestjs/common'
import { Users } from '../users/entities/users.entity'
import { UsersService } from '../users/users.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(loginDto: LoginDto): Promise<Users> {
    return await this.usersService.findUserByEmail(loginDto.email)
  }

  async register(user: RegisterDto): Promise<RegisterDto> {
    if (!(await this.isEmailValid(user.email))) {
      throw new Error('Email is not valid')
    }

    if (!(await this.isPasswordValid(user.password))) {
      throw new Error(
        'the password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number',
      )
    }

    return await this.usersService.create(user)
  }

  async isEmailValid(email: string): Promise<boolean> {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
  }

  async isPasswordValid(password: string): Promise<boolean> {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return passwordRegex.test(password)
  }
}
