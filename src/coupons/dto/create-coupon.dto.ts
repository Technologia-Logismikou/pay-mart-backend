export class CreateCouponDto {
  name: string;
  description: string;
  amountOff: number;
  percentOff: number;
  timesRedeemed: number;
  maxRedemptions: number;
  expiration: Date;
  active: boolean;
}
