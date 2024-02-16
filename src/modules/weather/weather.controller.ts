import { Controller, Get, Query } from '@nestjs/common'
import { WeatherService } from './weather.service'

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly weatherService: WeatherService
  ) {
  }

  @Get()
  async getWeather(
    @Query("q") q: string,
    @Query('lang') lang: string,
    @Query('request_type') request_type: string
  ) {
    return this.weatherService.getWeather(
      {
        'q': q,
        'lang': lang,
        'request_type': request_type
      }
    )
  }
}