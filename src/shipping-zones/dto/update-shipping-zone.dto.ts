import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateShippingZoneDto } from './create-shipping-zone.dto';

export class UpdateShippingZoneDto extends PartialType(
  OmitType(CreateShippingZoneDto, ['store'] as const),
) {}
