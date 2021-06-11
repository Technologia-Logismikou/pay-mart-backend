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
    const { store: createStoreDto } = createSellerDto;
    const seller = await this.sellersService.create(
      omit(createSellerDto, 'store', 'bankAccount'),
    );
    const store = await this.storesService.create({
      ...createStoreDto,
      seller,
    });

    // Remove 'seller' field from store for duplicate info
    return { seller, store: omit(store, 'seller') };
  }

  @Get()
  findAll() {
    return this.sellersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerDto) {
    return this.sellersService.update(id, updateSellerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellersService.remove(id);
  }
}
