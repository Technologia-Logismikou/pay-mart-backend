import { ApiProperty } from '@nestjs/swagger';
import { CreateStoreDto } from '../../stores/dto/create-store.dto';
import { BankInfoDto } from './bank-info.dto';

export class CreateSellerDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  store: CreateStoreDto;

  @ApiProperty()
  bankAccount: BankInfoDto;
}
