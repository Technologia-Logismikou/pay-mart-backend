import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShippingZone } from './shipping-zones.entity';

@Injectable()
export class ShippingZonesService {
  constructor(
    @InjectRepository(ShippingZone)
    private readonly shippingZonesRepository: Repository<ShippingZone>,
  ) {}
}
