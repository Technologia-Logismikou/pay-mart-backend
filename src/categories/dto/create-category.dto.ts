import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  // TODO: Delete these after auth
  @ApiProperty()
  store: string;

  @ApiProperty()
  name: string;
}
