import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { omit } from 'lodash';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { StoresService } from '../stores/stores.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly storesService: StoresService,
  ) {}

  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('photos'))
  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const store = await this.storesService.findOne(createProductDto.store);

    // Replace the photos array with the names of the uploaded files
    return this.productsService.create({
      ...omit(createProductDto, 'photos', 'store'),
      photos: files.map((photo) => photo.filename),
      store,
    });
  }

  @Get()
  findAll(@Query('store') store: string) {
    return this.productsService.findAll(store);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // TODO: Handle photo updates
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // TODO: Handle photo deletion
    return this.productsService.remove(id);
  }
}
