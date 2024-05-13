import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  // ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { ParseIntPipe } from '../../common/parse-int.pipe';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  private products: ProductsService = new ProductsService();
  // CLASS EXAMPLES
  /* @Get('')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `The Products are limit: ${limit} | The offset is: ${offset} | The brand is: ${brand}`
    };
  }

  @Get('filtered')
  getProductsFiltered() {
    return {
      message: `The Products filtered`
    };
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return {
      message: `The Product id is: ${id}`
    };
  }

  @Post()
  create(@Body() payload: any){
    return {
      messssage: 'Successfully created product',
      prodName: payload.name,
      prodPrice: payload.price
    }
  }

  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any){
    return {
      productId,
      payload
    }
  }

  @Delete(':productId')
  delete(@Param('productId') productId: number){
    return{
      productId,
      message: 'Successfully deleted product'
    }
  } */

  @Get()
  @ApiOperation({ summary: 'Get the totally of Products' })
  findAll() {
    return this.products.findAll();
  }

  @Get(':productId')
  findOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.products.findOne(productId);
  }

  @Post('create')
  create(@Body() payload: CreateProductDto) {
    if (this.products.create(payload)) {
      return {
        messssage: 'Successfully CREATED product',
        payload,
      };
    } else {
      return {
        messssage: `CAN'T CREATE the Product, some attributes are missing`,
      };
    }
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.products.update(id, payload);
  }

  @Delete('delete/:productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return this.products.delete(productId);
  }
}
