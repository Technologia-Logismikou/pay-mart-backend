// Only list the properties that need to be sent by the seller
import {ApiProperty} from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  photos: string[];

  
  public: boolean;
  url: string;
  slug: string;
}
