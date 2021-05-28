import { ApiProperty } from '@nestjs/swagger'

export class CreateShippingZoneDto {

  @ApiProperty()
  name: string;

  @ApiProperty()
  countries: string[];

  @ApiProperty()
  rate: number;

  /*
  name: string;
  counties: string[];
  rate: number;
  */
}
