import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: env.DB.HOST,
    port: env.DB.PORT,
    username: env.DB.USERNAME,
    password: env.DB.PASSWORD,
    database: env.DB.NAME,
    entities: [],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
