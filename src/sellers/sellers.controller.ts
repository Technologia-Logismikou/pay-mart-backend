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
import { omit } from 'lodash';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { StoresService } from '../stores/stores.service';

@ApiTags('Sellers')
@Controller('sellers')
export class SellersController {
  constructor(
    private readonly sellersService: SellersService,
    private readonly storesService: StoresService,
  ) {}

  @Post()
  async create(@Body() createSellerDto: CreateSellerDto) {
    /**
     * Create seller and store on register
     * TODO: Connect with 3rd party payment service (Everypay)
     */
    const { store } = createSellerDto;

    const seller = await this.sellersService.create(
      omit(createSellerDto, 'store', 'bankAccount'),
    );
    await this.storesService.create(store);

    return seller;
  }

  @Get()
  findAll() {
    return this.sellersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellersService.findOne(id);
  }

  @Put()
  update(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerDto) {
    return this.sellersService.update(id, updateSellerDto);
  }

  @Delete()
  remove(@Param('id') id: string) {
    return this.sellersService.remove(id);
  }
}
