import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';

@ApiTags('Refunds')
@Controller('refunds')
export class RefundsController {
  constructor(private readonly refundsService: RefundsService) {}

  @Post()
  create(@Body() createRefundDto: CreateRefundDto) {
    return this.refundsService.create(createRefundDto);
  }

  @Get()
  findAll() {
    return this.refundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refundsService.findOne(id);
  }
}
