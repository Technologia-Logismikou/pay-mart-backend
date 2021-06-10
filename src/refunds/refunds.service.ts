import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Refund } from './refunds.entity';
import { CreateRefundDto } from './dto/create-refund.dto';

@Injectable()
export class RefundsService {
  constructor(
    @InjectRepository(Refund)
    private readonly refundsRepository: Repository<Refund>,
  ) {}

  create(createRefundDto: CreateRefundDto) {
    // TODO: Get Order instance referenced when issue-22 is merged
    const refund = this.refundsRepository.create({ fee: createRefundDto.fee });
    return this.refundsRepository.save(refund);
  }

  findAll() {
    return this.refundsRepository.find();
  }

  findOne(id: string) {
    return this.refundsRepository.findOne(id);
  }
}
