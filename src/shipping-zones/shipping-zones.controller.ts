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

@ApiTags('Shipping-zones')
@Controller('shipping-zones')
export class ShippingZonesController {
    constructor(private readonly ShippingZonesService: ShippingZonesService) {}

    @Post()
    create(@Body() CreateShippingZoneDto: CreateShippingZoneDto) {
        return this.ShippingZonesService.create(CreateShippingZoneDto);
    }

    

}
