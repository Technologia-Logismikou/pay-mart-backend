import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

// Store field not updatable
export class UpdateCategoryDto extends PartialType(
  OmitType(CreateCategoryDto, ['store'] as const),
) {}
