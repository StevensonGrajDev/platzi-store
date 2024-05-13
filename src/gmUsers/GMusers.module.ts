import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { CustomersService } from './customers/customers.service';
import { UsersController } from './users/users.controller';
import { CustomerController } from './customers/customers.controller';

@Module({
  providers: [UsersService, CustomersService],
  controllers: [UsersController, CustomerController],
  exports: [UsersService]
})
export class GMUsersModule {}
