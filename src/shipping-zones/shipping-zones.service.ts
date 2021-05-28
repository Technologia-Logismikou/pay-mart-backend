import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShippingZone } from './shipping-zones.entity';
import { CreateShippingZoneDto } from './dto/create-shipping-zone.dto';
import { UpdateShippingZoneDto } from './dto/update-shipping-zone.dto';


@Injectable()
export class ShippingZonesService {
  constructor(
    @InjectRepository(ShippingZone)
    private readonly shippingZonesRepository: Repository<ShippingZone>,
  ) {}

create(CreateShippingZoneDto: CreateShippingZoneDto) {
  const shippingzone = this.shippingZonesRepository.create(CreateShippingZoneDto);
  return this.shippingZonesRepository.save(shippingzone);
}




}
