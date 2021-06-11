import { Module, UnsupportedMediaTypeException } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Product } from './products.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { StoresModule } from '../stores/stores.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        // Set file name to current date with a 'png' or 'jpg' extention
        filename: (req: any, file: Express.Multer.File, callback: Function) => {
          const name = Date.now().toString();
          const extension = file.mimetype === 'image/png' ? '.png' : '.jpg';

          return callback(null, name + extension);
        },
      }),
      fileFilter: (req: any, file: any, callback: Function) => {
        // Only accept png and jpeg files, throw unsupported media type exception for very other type
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg')
          return callback(null, true);
        return callback(
          new UnsupportedMediaTypeException(
            `Unsupported file type for ${file.originalname}`,
          ),
        );
      },
    }),
    StoresModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
