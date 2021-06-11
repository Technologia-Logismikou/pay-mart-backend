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
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { SellersService } from '../sellers/sellers.service';
import { ProductsService } from '../products/products.service';
import { CouponsService } from '../coupons/coupons.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
        private readonly sellerService: SellersService,    
        private readonly productsService: ProductsService, 
        private readonly couponsService: CouponsService,  
    ) {}

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        const seller = await this.sellerService.findOne(createOrderDto.seller);
        const products = await this.productsService.findmany(createOrderDto.products);
        const coupon = await this.couponsService.findOne(createOrderDto.coupon);
        return this.ordersService.create({
            ...omit(createOrderDto, 'seller' , 'products' , 'coupon'),
            seller, products, coupon
        });
    }

    @Get()
    findAll(@Query('seller') seller: string) {
        return this.ordersService.findAll(seller);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordersService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateOrderDto: UpdateOrderDto,
    ) {
        return this.ordersService.update(id, updateOrderDto);
    }
    

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordersService.remove(id);
    }
}
