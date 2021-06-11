import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Store } from '../stores/stores.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  create(
    createCategoryDto: Omit<CreateCategoryDto, 'store'> & { store: Store },
  ) {
    const category = this.categoriesRepository.create(createCategoryDto);
    return this.categoriesRepository.save(category);
  }

  findAll(store: string) {
    return this.categoriesRepository.find({ store: { id: store } });
  }

  findOne(id: string) {
    return this.categoriesRepository.findOne(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoriesRepository.delete(id);
  }
}
