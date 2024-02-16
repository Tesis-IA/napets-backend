import { IsNotEmpty, IsString } from 'class-validator'

export class ConditionDto {
  @IsString()
  @IsNotEmpty()
  text: string

  @IsString()
  @IsNotEmpty()
  icon: string
}
