import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApplicationInstruction } from './entities/application-instruction.entity'
import { Precaution } from './entities/precaution.entity'
import { ProductDetails } from './entities/product-details.entity'
import { Product } from './entities/product.entity'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationInstruction, Precaution, ProductDetails, Product])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule { }