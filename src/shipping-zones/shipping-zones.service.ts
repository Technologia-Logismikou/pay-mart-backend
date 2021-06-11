import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShippingZone } from './shipping-zones.entity';
import { CreateShippingZoneDto } from './dto/create-shipping-zone.dto';
import { UpdateShippingZoneDto } from './dto/update-shipping-zone.dto';
import { Store } from '../stores/stores.entity';

@Injectable()
export class ShippingZonesService {
  constructor(
    @InjectRepository(ShippingZone)
    private readonly shippingZonesRepository: Repository<ShippingZone>,
  ) {}

  create(
    createShippingZoneDto: Omit<CreateShippingZoneDto, 'store'> & {
      store: Store;
    },
  ) {
    const shippingzone = this.shippingZonesRepository.create(
      createShippingZoneDto,
    );
    return this.shippingZonesRepository.save(shippingzone);
  }

  findAll(store: string) {
    return this.shippingZonesRepository.find({ store: { id: store } });
  }

  findOne(id: string) {
    return this.shippingZonesRepository.findOne(id);
  }

  update(id: string, updateShippingZoneDto: UpdateShippingZoneDto) {
    return this.shippingZonesRepository.update(id, updateShippingZoneDto);
  }

  remove(id: string) {
    return this.shippingZonesRepository.delete(id);
  }
}
