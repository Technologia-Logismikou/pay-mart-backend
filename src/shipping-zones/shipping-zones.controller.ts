import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { omit } from 'lodash';
import { ShippingZonesService } from './shipping-zones.service';
import { CreateShippingZoneDto } from './dto/create-shipping-zone.dto';
import { UpdateShippingZoneDto } from './dto/update-shipping-zone.dto';
import { StoresService } from '../stores/stores.service';

@ApiTags('Shipping Zones')
@Controller('shipping-zones')
export class ShippingZonesController {
  constructor(
    private readonly shippingZonesService: ShippingZonesService,
    private readonly storesService: StoresService,
  ) {}

  @Post()
  async create(@Body() createShippingZoneDto: CreateShippingZoneDto) {
    const store = await this.storesService.findOne(createShippingZoneDto.store);

    return this.shippingZonesService.create({
      ...omit(createShippingZoneDto, 'store'),
      store,
    });
  }

  @Get()
  findAll(@Query('store') store: string) {
    return this.shippingZonesService.findAll(store);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingZonesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateShippingZoneDto: UpdateShippingZoneDto,
  ) {
    return this.shippingZonesService.update(id, updateShippingZoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingZonesService.remove(id);
  }
}
