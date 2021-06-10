// Only list the properties that need to be sent by the seller
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ format: 'binary' })
  photos: string[];

  @ApiProperty()
  public: boolean;

  @ApiProperty()
  url: string;

  @ApiProperty()
  slug: string;
}
