import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ProductsModule } from '../products/products.module';
import { CouponsModule } from '../coupons/coupons.module';
import { SellersModule } from '../sellers/sellers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]) , ProductsModule , CouponsModule , SellersModule],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
