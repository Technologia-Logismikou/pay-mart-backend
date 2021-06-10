import { ApiProperty } from '@nestjs/swagger';

export class CreateRefundDto {
  @ApiProperty()
  order: string;

  @ApiProperty()
  fee: number;
}
