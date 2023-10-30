import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {UsersModule} from './modules/users/users.module'
import {AuthModule} from './modules/auth/auth.module'
import {SubjectsModule} from "./modules/home/subjects/subjects.module";
import {PredictionService} from "./modules/prediction/prediction.service";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT),
            password: process.env.POSTGRES_PASSWORD,
            username: process.env.POSTGRES_USER,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            ssl: {
                /* <----- Add SSL option */
                requestCert: true,
                rejectUnauthorized: false,
            },
        }),
        UsersModule,
        AuthModule,
        SubjectsModule,
        PredictionService
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
