import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ImageUploadPipe implements PipeTransform {
  private readonly allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
  ]

  private readonly maxFileSize = 204800 // 200KB

  transform(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File not found')
    }

    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type')
    }

    if (file.size > this.maxFileSize) {
      throw new BadRequestException('File too large')
    }

    return file;
  }
}
