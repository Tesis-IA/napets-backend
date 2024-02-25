import { IsBoolean, IsNotEmpty } from 'class-validator'

export class PredictionDTO {
  @IsNotEmpty()
  likely_class: number

  @IsNotEmpty()
  content_type: string

  @IsNotEmpty()
  prediction: number[]

  @IsNotEmpty()
  filename: string

  @IsBoolean()
  success: boolean
}