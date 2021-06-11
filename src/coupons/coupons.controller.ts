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
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { StoresService } from '../stores/stores.service';

@ApiTags('Coupons')
@Controller('coupons')
export class CouponsController {
  constructor(
    private readonly couponsService: CouponsService,
    private readonly storesService: StoresService,
  ) {}

  @Post()
  async create(@Body() createCouponDto: CreateCouponDto) {
    const store = await this.storesService.findOne(createCouponDto.store);

    return this.couponsService.create({ ...omit(createCouponDto), store });
  }

  @Get()
  findAll(@Query('store') store: string) {
    return this.couponsService.findAll(store);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.couponsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCouponDto: UpdateCouponDto) {
    return this.couponsService.update(id, updateCouponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.couponsService.remove(id);
  }
}
