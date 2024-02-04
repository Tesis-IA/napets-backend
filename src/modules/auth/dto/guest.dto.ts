import { IsNotEmpty, IsString } from 'class-validator'

export class GuestDto {
  @IsNotEmpty()
  @IsString()
  device_id: string
}