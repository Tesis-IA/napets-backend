import { IsNotEmpty, IsString } from 'class-validator'

export class HistoryDto {
  @IsNotEmpty()
  @IsString()
  image: string[]

  @IsNotEmpty()
  @IsString()
  diagnostic: string
}