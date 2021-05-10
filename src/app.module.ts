// Entity imports for TypeORM
import { Product } from './products/products.entity';
import { Store } from './stores/stores.entity';
import { Order } from './orders/orders.entity';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/configuration';
import { DatabaseConfig } from './config/types';
import { ProductsModule } from './products/products.module';
import { StoresModule } from './stores/stores.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const databaseConfig = configService.get<DatabaseConfig>('DATABASE');

        return {
          host: databaseConfig.host,
          database: databaseConfig.name,
          username: databaseConfig.user,
          password: databaseConfig.password,
          port: databaseConfig.port,
          type: 'postgres',
          entities: [Product, Store, Order],
          synchronize: configService.get('ENV') === 'development',
        };
      },
      inject: [ConfigService],
    }),
    ProductsModule,
    StoresModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
