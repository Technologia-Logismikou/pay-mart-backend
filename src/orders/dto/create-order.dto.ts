import { CardInfoDto } from './card-info.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  customer: string;

  @ApiProperty()
  card: CardInfoDto;
  
  @ApiProperty()
  seller: string;
  
  @ApiProperty()
  coupon: string;

  @ApiProperty()
  products: string[];

  @ApiProperty()
  county: string;

  @ApiProperty()
  shippingAddress: string;

  @ApiProperty()
  billingAddress: string;
}
