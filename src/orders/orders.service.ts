import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { UsersService } from 'src/gmUsers/users/users.service';
import { ProductsService } from 'src/gmProducts/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService
  ){}

  private orders: Order[] = [
    {
      id: '1',
      date: new Date(),
      user: this.usersService.create({
        email: 'correo2@mail.com',
        password: '12345',
        role: 'Otro',
      }),
      products: [
        this.productsService.create({
          name: 'Product Order',
          description: 'Product of Order',
          price: 100,
          stock: 10,
          image: 'Url'
        })
      ]
    },
    {
      id: '2',
      date: new Date(),
      user: this.usersService.create({
        email: 'correo3@mail.com',
        password: '12345',
        role: 'Tercero',
      }),
      products: [
        this.productsService.create({
          name: 'Product Order 2',
          description: 'Product of Order 2',
          price: 11,
          stock: 111,
          image: 'UERREELE'
        })
      ]
    }
  ]

  getOrdersByUser(id: number): Order[]{
    let userOrders: Order[] = []
    this.orders.map(ord => { ord.user.id === id ? userOrders.push(ord) : null})

    return userOrders
  }
}
