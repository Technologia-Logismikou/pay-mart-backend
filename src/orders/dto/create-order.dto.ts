// TODO: Add payment data to this dto
export class CreateOrderDto {
  customer: string;
  seller: string;
  // coupon: string;
  products: string[];
  county: string;
  shippingAddress: string;
  billingAddress: string;
}
