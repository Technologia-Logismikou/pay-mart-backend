export class CreateOrderDto {
  customer: string;
  seller: string;
  coupon: string;
  products: string[];
  county: string;
  shippingAddress: string;
  billingAddress: string;
}
