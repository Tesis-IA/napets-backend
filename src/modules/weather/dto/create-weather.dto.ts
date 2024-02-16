import { IsNotEmpty } from 'class-validator'
import { LocationDto } from './location.dto'
import { CurrentDto } from './current.dto'

export class CreateWeatherDto {
  @IsNotEmpty()
  location: LocationDto

  @IsNotEmpty()
  current: CurrentDto
}