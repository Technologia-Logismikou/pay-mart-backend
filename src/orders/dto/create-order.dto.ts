import { CardInfoDto } from './card-info.dto';

export class CreateOrderDto {
  customer: string;
  card: CardInfoDto;
  seller: string;
  coupon: string;
  products: string[];
  county: string;
  shippingAddress: string;
  billingAddress: string;
}
