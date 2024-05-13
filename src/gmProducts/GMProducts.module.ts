import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { BrandsService } from './brands/brands.service';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products/products.service';
import { BrandsController } from './brands/brands.controller';
import { CategoriesController } from './categories/categories.controller';
import { ProductsController } from './products/products.controller';

@Module({
  providers: [BrandsService, CategoriesService, ProductsService],
  controllers: [BrandsController, CategoriesController, ProductsController],
  exports: [ProductsService],
})
export class GMProductsModule {}
