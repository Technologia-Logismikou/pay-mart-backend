import { ApiProperty } from '@nestjs/swagger'

export class CreateShippingZoneDto {

  @ApiProperty()
  name: string;

  @ApiProperty()
  counties: string[];

  @ApiProperty()
  rate: number;


}
