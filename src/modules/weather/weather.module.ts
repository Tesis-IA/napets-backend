import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WeatherKeyEntity } from './entities/weather-key.entity'
import { HttpModule } from '@nestjs/axios'
import { WeatherController } from './weather.controller'
import { WeatherService } from './weather.service'

@Module({
  imports: [TypeOrmModule.forFeature([WeatherKeyEntity]), HttpModule],
  controllers: [WeatherController],
  providers: [WeatherService],
  exports: [WeatherService]
})

export class WeatherModule { }