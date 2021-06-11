import { ApiProperty } from '@nestjs/swagger';

export class CreateShippingZoneDto {
  // TODO: Remove this after auth
  @ApiProperty()
  store: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  counties: string[];

  @ApiProperty()
  rate: number;
}
