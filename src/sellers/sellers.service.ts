import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from './sellers.entity';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class SellersService {
  constructor(
    @InjectRepository(Seller)
    private readonly sellersRepository: Repository<Seller>,
  ) {}

  create(createSellerDto: Omit<CreateSellerDto, 'store' | 'bankAccount'>) {
    const seller = this.sellersRepository.create(createSellerDto);
    return this.sellersRepository.save(seller);
  }

  login(loginDto: LoginDto) {
    return this.sellersRepository.findOne(loginDto);
  }

  findAll() {
    return this.sellersRepository.find();
  }

  findOne(id: string) {
    return this.sellersRepository.findOne(id);
  }

  update(id: string, updateSellerDto: UpdateSellerDto) {
    return this.sellersRepository.update(id, updateSellerDto);
  }

  remove(id: string) {
    return this.sellersRepository.delete(id);
  }
}
