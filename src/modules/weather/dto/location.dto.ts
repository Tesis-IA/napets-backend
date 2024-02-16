import { IsNotEmpty, IsString } from 'class-validator'

export class LocationDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  region: string

  @IsString()
  @IsNotEmpty()
  country: string

  @IsNotEmpty()
  lat: number

  @IsNotEmpty()
  lon: number

  @IsNotEmpty()
  @IsString()
  tz_id: string

  @IsString()
  @IsNotEmpty()
  localtime: string
}
