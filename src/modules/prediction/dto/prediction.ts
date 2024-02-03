import { IsNotEmpty } from 'class-validator'

export class PredictionDTO {
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  class_name: string
}