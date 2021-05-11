import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateSellerDto } from './create-seller.dto';

// Field "store" not updatable
export class UpdateSellerDto extends PartialType(
  OmitType(CreateSellerDto, ['store'] as const),
) {}
