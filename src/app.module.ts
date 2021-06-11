// Entity imports for TypeORM
import { Product } from './products/products.entity';
import { Store } from './stores/stores.entity';
import { Order } from './orders/orders.entity';
import { Refund } from './refunds/refunds.entity';
import { ShippingZone } from './shipping-zones/shipping-zones.entity';
import { Seller } from './sellers/sellers.entity';
import { Category } from './categories/categories.entity';
import { Coupon } from './coupons/coupons.entity';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import config from './config/configuration';
import { DatabaseConfig } from './config/types';
import { ProductsModule } from './products/products.module';
import { StoresModule } from './stores/stores.module';
import { OrdersModule } from './orders/orders.module';
import { RefundsModule } from './refunds/refunds.module';
import { ShippingZonesModule } from './shipping-zones/shipping-zones.module';
import { SellersModule } from './sellers/sellers.module';
import { CategoriesModule } from './categories/categories.module';
import { CouponsModule } from './coupons/coupons.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: {
        extensions: ['png', 'jpg'],
      },
    }),
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
          entities: [
            Product,
            Store,
            Order,
            Seller,
            Refund,
            ShippingZone,
            Category,
            Coupon,
          ],
          synchronize: configService.get('ENV') === 'development',
        };
      },
      inject: [ConfigService],
    }),
    ProductsModule,
    StoresModule,
    OrdersModule,
    RefundsModule,
    ShippingZonesModule,
    SellersModule,
    CategoriesModule,
    CouponsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
