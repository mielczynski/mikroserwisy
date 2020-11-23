import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {env} from "./env";
import {User} from "./_entity/user.entity";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import {UserRepository} from "./_repositories/user.repository";

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.DB.HOST,
      port: env.DB.PORT,
      username: env.DB.USERNAME,
      password: env.DB.PASSWORD,
      database: env.DB.NAME,
      entities: [User],
      synchronize: true,
      // logging: 'all'
    }),
      TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {

  constructor() {
    console.log(env);
  }
}
