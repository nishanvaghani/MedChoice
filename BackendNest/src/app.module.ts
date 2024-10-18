import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalModule } from './hospital/hospital.module';
import { UserModule } from './user/user.module';
import { InsuranceModule } from './insurance/insurance.module';
import dbConfig from './config/dbConfig';

@Module({
  imports: [
    //This is form .env file configuration
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig],
    }),

    // This is for DB configuration
    TypeOrmModule.forRootAsync({
      useFactory: dbConfig
    }),

    // This is for modules configuration
    HospitalModule, UserModule, InsuranceModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
