import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { GMUsersModule } from 'src/gmUsers/GMusers.module';
import { GMProductsModule } from 'src/gmProducts/GMProducts.module';

@Module({
  imports: [
    GMUsersModule,
    GMProductsModule
  ],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule { }
