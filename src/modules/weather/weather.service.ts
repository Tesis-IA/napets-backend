import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { WeatherKeyEntity } from './entities/weather-key.entity'
import { Repository } from 'typeorm'
import { WeatherParametersDto } from './dto/weather-parameters'
import { HttpService } from '@nestjs/axios'
import { catchError, firstValueFrom } from 'rxjs'
import { CreateWeatherDto } from './dto/create-weather.dto'
import { API_WEATHER } from '../../utils/constant'
import { AxiosError } from 'axios'
import { HttpException } from '@nestjs/common/exceptions'

@Injectable()
export class WeatherService {
  constructor(@InjectRepository(WeatherKeyEntity) private readonly weatherRepository: Repository<WeatherKeyEntity>,
              private readonly httpService: HttpService
  ) { }

  async getWeather(weatherParametersDto: WeatherParametersDto) {
    const weather = await this.weatherRepository.find()
    const apiWeatherKey = weather.at(0).key

    const apiWeatherUrl = `${API_WEATHER}${weatherParametersDto.request_type}?key=${apiWeatherKey}&q=${weatherParametersDto.q}&lang=${weatherParametersDto.lang}`
   const { data } = await firstValueFrom(
     this.httpService.get<CreateWeatherDto>(apiWeatherUrl).pipe(
       catchError((err: AxiosError) => {
         throw new HttpException(`An occurred when trying get weather from API: ${err}`, 404)
       })
     )
   )
    return data
  }
}