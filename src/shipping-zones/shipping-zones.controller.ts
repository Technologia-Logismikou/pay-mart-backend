import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShippingZonesService } from './shipping-zones.service';
import { CreateShippingZoneDto } from './dto/create-shipping-zone.dto';
import { UpdateShippingZoneDto } from './dto/update-shipping-zone.dto';

@ApiTags('Shipping Zones')
@Controller('shipping-zones')
export class ShippingZonesController {
  constructor(private readonly shippingZonesService: ShippingZonesService) {}

  @Post()
  create(@Body() createShippingZoneDto: CreateShippingZoneDto) {
    return this.shippingZonesService.create(createShippingZoneDto);
  }

  @Get()
  findAll() {
    return this.shippingZonesService.findAll();
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
