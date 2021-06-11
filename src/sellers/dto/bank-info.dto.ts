import { ApiProperty } from '@nestjs/swagger';

export class BankInfoDto {
  @ApiProperty()
  iban: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  beneficiary: string;
}
