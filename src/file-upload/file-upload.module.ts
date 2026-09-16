import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ProductsModule } from 'src/Products/products.module';
import { SharedModule } from 'src/shared-module/shared-module.module';

@Module({
  imports: [ProductsModule, SharedModule],
  controllers: [FileUploadController],
  providers: [FileUploadService, CloudinaryService],
  exports: [FileUploadService]
})
export class FileUploadModule {}
