import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GMProductsModule } from './gmProducts/GMProducts.module';
import { GMUsersModule } from './gmUsers/GMusers.module';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from './database/database.module';
import { enviorment } from './enviorment';
import config from './config';
import * as Joi from 'joi';

@Module({
  imports: [
    DatabaseModule,
    OrdersModule,
    GMProductsModule,
    GMUsersModule,
    ConfigModule.forRoot({
      envFilePath: enviorment[process.env.NODE_ENV] ?? '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
