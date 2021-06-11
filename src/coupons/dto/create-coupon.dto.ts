import { ApiProperty } from '@nestjs/swagger';

export class CreateCouponDto {
  // TODO: Delete these after auth
  @ApiProperty()
  store: string;

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
