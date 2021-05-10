import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingZone } from './shipping-zones.entity';
import { ShippingZonesService } from './shipping-zones.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingZone])],
  providers: [ShippingZonesService],
})
export class ShippingZonesModule {}
