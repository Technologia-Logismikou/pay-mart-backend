import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refund } from './refunds.entity';
import { RefundsService } from './refunds.service';
import { RefundsController } from './refunds.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Refund])],
  providers: [RefundsService],
  controllers: [RefundsController],
})
export class RefundsModule {}
