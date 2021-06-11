import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from './coupons.entity';
import { CouponsService } from './coupons.service';
import { CouponsController } from './coupons.controller';
import { StoresModule } from '../stores/stores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Coupon]), StoresModule],
  providers: [CouponsService],
  controllers: [CouponsController],
})
export class CouponsModule {}
