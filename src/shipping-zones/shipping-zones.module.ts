import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingZone } from './shipping-zones.entity';
import { ShippingZonesService } from './shipping-zones.service';
import { ShippingZonesController } from './shipping-zones.controller';
import { StoresModule } from '../stores/stores.module';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingZone]), StoresModule],
  providers: [ShippingZonesService],
  controllers: [ShippingZonesController],
})
export class ShippingZonesModule {}
