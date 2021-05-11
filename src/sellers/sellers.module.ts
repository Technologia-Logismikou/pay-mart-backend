import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './sellers.entity';
import { SellersService } from './sellers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellersService],
})
export class SellersModule {}
