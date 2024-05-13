import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { Product } from './product.entity'
import { CreateProductDto, UpdateProductDto } from './product.dto'
@Injectable()
export class ProductsService {
  private provisionalId = 2
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product description',
      price: 55,
      stock: 5,
      image: ''
    }
  ]

  findAll() {
    return this.products
  }

  findOne(productId: number) {
    const product = this.products.find(p => p.id === productId)
    if (!product) {
      throw new HttpException(`NOT FOUND Product with id[${productId}]`, HttpStatus.NOT_FOUND);
    }
    return product
  }

  create(preProduct: CreateProductDto){
    const newProduct: Product = {
      id: this.provisionalId,
      ...preProduct
    }
    this.products.push(newProduct)
    this.provisionalId++
    return newProduct
  }

  update(id: number, product: UpdateProductDto){
    const index = this.products.indexOf(this.products.find(p=>p.id === id))
    if (index==-1) {
      throw new HttpException(`NOT FOUND Product with id[${id}]`, HttpStatus.NOT_FOUND);
    }else{
      this.products[index] = {
        ...this.products[index],
        ...product
      }
      return {message: `Successfully UPDATED product ID->${id}`}
    }
  }

  delete(productId: number){
    const index = this.products.indexOf(this.products.find(p => p.id === productId))
    if (index==-1) {
      throw new HttpException(`NOT FOUND Product with id[${productId}]`, HttpStatus.NOT_FOUND);
    }else{
      this.products.splice(index,1)
      return {message: `Successfully DELETED product ID->${productId}`}
    }
  }
}
