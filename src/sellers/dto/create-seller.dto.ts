import { CreateStoreDto } from '../../stores/dto/create-store.dto';
import { BankInfoDto } from './bank-info.dto';

export class CreateSellerDto {
  email: string;
  password: string;
  phone: string;
  store: CreateStoreDto;
  bankAccount: BankInfoDto;
}
