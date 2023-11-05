import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  readonly products = [];

  create(createProductDto: CreateProductDto) {
    // generate random id string and create/update date
    const newProduct = {
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createProductDto,
    };

    return this.products.push(newProduct);
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((product) => product.id === id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex >= 0) {
      this.products[productIndex] = {
        ...this.products[productIndex],
        ...updateProductDto,
        updatedAt: new Date(),
      };

      return this.products[productIndex];
    }

    return null;
  }

  remove(id: string) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex >= 0) {
      this.products.splice(productIndex, 1);
    }
  }
}
