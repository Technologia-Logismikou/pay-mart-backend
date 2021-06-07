import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './sellers.entity';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { StoresModule } from '../stores/stores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Seller]), StoresModule],
  providers: [SellersService],
  controllers: [SellersController],
})
export class SellersModule {}
