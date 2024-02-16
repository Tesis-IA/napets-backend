import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  @IsString()
  device_id: string
}
