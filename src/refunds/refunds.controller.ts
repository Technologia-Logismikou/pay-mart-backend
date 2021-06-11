import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { omit } from 'lodash';
import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { OrdersService } from '../orders/orders.service';

@ApiTags('Refunds')
@Controller('refunds')
export class RefundsController {
  constructor(
    private readonly refundsService: RefundsService,
    private readonly ordersService: OrdersService,
  ) {}

  @Post()
  async create(@Body() createRefundDto: CreateRefundDto) {
    const order = await this.ordersService.findOne(createRefundDto.order);
    return this.refundsService.create({
      ...omit(createRefundDto, 'order'),
      order,
    });
  }

  @Get()
  findAll(@Query('seller') seller: string) {
    return this.refundsService.findAll(seller);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refundsService.findOne(id);
  }
}
