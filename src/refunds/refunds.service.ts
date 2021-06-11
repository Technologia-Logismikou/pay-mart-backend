import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Refund } from './refunds.entity';
import { CreateRefundDto } from './dto/create-refund.dto';
import { Order } from 'src/orders/orders.entity';

@Injectable()
export class RefundsService {
  constructor(
    @InjectRepository(Refund)
    private readonly refundsRepository: Repository<Refund>,
  ) {}

  create(createRefundDto: Omit<CreateRefundDto, 'order'> & { order: Order }) {
    const refund = this.refundsRepository.create(createRefundDto);
    return this.refundsRepository.save(refund);
  }

  findAll(seller: string) {
    return this.refundsRepository.find();
  }

  findOne(id: string) {
    return this.refundsRepository.findOne(id);
  }
}
