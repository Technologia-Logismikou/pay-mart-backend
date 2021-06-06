import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './stores.entity';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storesRepository: Repository<Store>,
  ) {}

  create(createStoreDto: CreateStoreDto) {
    const store = this.storesRepository.create(createStoreDto);
    return this.storesRepository.save(store);
  }

  findAll() {
    return this.storesRepository.find();
  }

  findOne(id: string) {
    return this.storesRepository.findOne(id);
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.storesRepository.update(id, updateStoreDto);
  }

  remove(id: string) {
    return this.storesRepository.delete(id);
  }
}
