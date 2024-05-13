import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { OrdersService } from './orders.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get('user/:id')
  @ApiOperation({ summary: 'Get the totally Orders of an User by him/her ID' })
  findOrdersByUser(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getOrdersByUser(id);
  }
}
