import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductDetails } from './entities/product-details.entity'
import { Repository } from 'typeorm'
import { HttpException } from '@nestjs/common/exceptions'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductDetails) private readonly productRepository: Repository<ProductDetails>
  ) { }

  async findAllProducts() {
    return await this.productRepository.find()
  }

  async findProductById(id: number) {
    const data = await this.productRepository.findOne({
      where: {
        product: { id }
      },
      relations: ['precautions', 'application_instructions']
    })
    if (!data) {
      throw new HttpException('Product Details Not Found', 404)
    }
    return data
  }
}