import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  // TODO: Delete this after auth
  @ApiProperty()
  store: string;

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
