import { Controller, Get, Param } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) { }

  @Get()
  async findAllProducts() {
    return this.productService.findAllProducts()
  }

  @Get(':id')
  async findProductById(@Param('id') id: string) {
    return this.productService.findProductById(+id)
  }
}