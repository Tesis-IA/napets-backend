import { IsNotEmpty, IsString } from 'class-validator'
import { ConditionDto } from './condition.dto'

export class CurrentDto {
  @IsString()
  @IsNotEmpty()
  last_updated: string

  @IsNotEmpty()
  temp_c: number

  @IsNotEmpty()
  temp_f: number

  @IsNotEmpty()
  condition: ConditionDto

  @IsNotEmpty()
  humidity: number

  @IsNotEmpty()
  cloud: number
}
