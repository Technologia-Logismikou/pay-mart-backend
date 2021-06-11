import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  logo: string;

  @ApiProperty()
  subdomain: string;

  @ApiProperty()
  website: string;
}
