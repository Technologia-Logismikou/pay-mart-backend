import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/configuration';
import { DatabaseConfig } from './config/types';
import { ProductsModule } from './products/products.module';
import { Product } from './products/products.entity';

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
          entities: [Product],
          synchronize: configService.get('ENV') === 'development',
        };
      },
      inject: [ConfigService],
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
