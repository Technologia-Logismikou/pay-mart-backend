import { ApiProperty } from '@nestjs/swagger';

export class CreateCouponDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  amountOff: number;

  @ApiProperty()
  percentOff: number;

  @ApiProperty()
  timesRedeemed: number;

  @ApiProperty()
  maxRedemptions: number;

  @ApiProperty()
  expiration: Date;

  @ApiProperty()
  active: boolean;
}
