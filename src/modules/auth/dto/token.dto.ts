import { PartialType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsString } from 'class-validator'
import { LoginDto } from './login.dto'

export class TokenDto extends PartialType(LoginDto) {
  @IsNotEmpty()
  @IsString()
  token: string
}
