import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { JwtService } from '@nestjs/jwt';

describe('FileUploadController', () => {
  let controller: FileUploadController;

  beforeEach(async () => {
    const mockFileUploadService: Partial<FileUploadService> = {
      getFileUrlService: jest.fn().mockReturnValue({ url: 'url' })
    }

    const mockJwtService = {
      sign: jest.fn(() => 'token'),
      verify: jest.fn(() => ({ userId: 'asvf-asdf-asdf-asdf' }))
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileUploadController],
      providers: [{
        provide: FileUploadService,
        useValue: mockFileUploadService
      },
      {
        provide: JwtService,
        useValue: mockJwtService
      }
      ],
    }).compile();

    controller = module.get<FileUploadController>(FileUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(controller.uploadFileController).toBeDefined()
  })
});
