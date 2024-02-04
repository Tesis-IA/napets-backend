import { PartialType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsString } from 'class-validator'
import { LoginDto } from './login.dto'

export class RegisterDto extends PartialType(LoginDto) {
  @IsNotEmpty()
  @IsString()
  username?: string

  @IsNotEmpty()
  @IsString()
  auth_strategy?: string
}
