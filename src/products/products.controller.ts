import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  createProduct(): string {
    return 'string';
  }

  /**
   * @returns /products
   */
  @Get()
  getProductListing(): any {
    return 'hey';
  }

  /**
   * @param id
   * @returns /products/:id
   */
  @Get(':id')
  getProducts(@Param('id') id: string): string {
    return `You are now in collection: ${id}`;
  }
}
