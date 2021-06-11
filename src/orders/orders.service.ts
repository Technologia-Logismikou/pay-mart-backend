import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Seller } from '../sellers/sellers.entity';
import { Product } from 'src/products/products.entity';
import { Coupon } from 'src/coupons/coupons.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  create(createOrderDto: Omit<CreateOrderDto, 'seller' | 'products' | 'coupon'> & { seller: Seller , products: Product[] , coupon: Coupon }) {
    const order = this.ordersRepository.create(createOrderDto);
    return this.ordersRepository.save(order);
  }

  findAll(seller: string) {
    return this.ordersRepository.find({seller: {id: seller}});
  }

  findOne(id: string) {
    return this.ordersRepository.findOne(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersRepository.update(id, updateOrderDto);
  }

  remove(id: string) {
    return this.ordersRepository.delete(id);
  }
}
