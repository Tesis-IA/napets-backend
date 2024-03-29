import {
  Controller, Param,
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
  constructor(
    private readonly predictionService: PredictionService
  ) { }

  @Post(':device_id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public',
        filename: (req, file, cb) => {
          const fileName = file.originalname.replace(/\s/g, "_");
          console.log(file)
          FileName.fileName = fileName
          cb(null, fileName)
        },
      }),
    }),
  )
  async makePrediction(@Param('device_id') deviceId: string, @Req() request: Request) {
    const baseUrl = `${request.protocol}://${request.get('Host')}/public/${FileName.fileName}`
    console.log(baseUrl)
    return this.predictionService.makePrediction(
      deviceId,
      { 'url_image': baseUrl }
    )
  }
}