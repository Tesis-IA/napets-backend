import {
  Controller,
  Post, Req,
  UseInterceptors,
} from '@nestjs/common'
import { PredictionService } from './prediction.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { Request } from 'express'
import { FileName, getNameFileFromDate } from '../../utils/date_utils'
import { diskStorage } from 'multer'

@Controller('prediction')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {

  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public',
        filename: (req, file, cb) => {
          const fileName = `${getNameFileFromDate()}.jpg`
          FileName.fileName = fileName
          cb(null, fileName)
        },
      }),
    }),
  )
  async makePrediction(@Req() request: Request) {
    const baseUrl = `${request.protocol}://${request.get('Host')}/public/${FileName.fileName}`
    console.log(baseUrl)
    return this.predictionService.makePrediction({
      'url_image': baseUrl
    })
  }
}