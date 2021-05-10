import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refund } from './refunds.entity';
import { RefundsService } from './refunds.service';

@Module({
  imports: [TypeOrmModule.forFeature([Refund])],
  providers: [RefundsService],
})
export class RefundsModule {}
