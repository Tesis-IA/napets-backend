import { IsNotEmpty } from 'class-validator'

export class WeatherParametersDto {
  @IsNotEmpty()
  q: string

  @IsNotEmpty()
  lang: string

  @IsNotEmpty()
  request_type: string
}