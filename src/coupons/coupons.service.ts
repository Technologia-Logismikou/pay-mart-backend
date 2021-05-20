import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './coupons.entity';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponsService {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponsRepository: Repository<Coupon>,
  ) {}

  create(createCouponDto: CreateCouponDto) {
    const coupon = this.couponsRepository.create(createCouponDto);
    return this.couponsRepository.save(coupon);
  }

  findAll() {
    return this.couponsRepository.find();
  }

  findOne(id: string) {
    return this.couponsRepository.findOne(id);
  }

  update(id: string, updateCouponDto: UpdateCouponDto) {
    return this.couponsRepository.update(id, updateCouponDto);
  }

  remove(id: string) {
    return this.couponsRepository.delete(id);
  }
}
