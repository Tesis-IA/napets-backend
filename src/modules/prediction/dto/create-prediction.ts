import { IsNotEmpty } from 'class-validator'

export class CreatePredictionDto {
    @IsNotEmpty()
    url_image: string
}