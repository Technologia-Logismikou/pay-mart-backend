import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from 'src/stores/stores.entity';
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

  create(createCouponDto: Omit<CreateCouponDto, 'store'> & { store: Store }) {
    const coupon = this.couponsRepository.create(createCouponDto);
    return this.couponsRepository.save(coupon);
  }

  findAll(store: string) {
    return this.couponsRepository.find({ store: { id: store } });
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
