import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadService } from './file-upload.service';

describe('FileUploadService', () => {
  let service: FileUploadService;

  beforeEach(async () => {

    const mockFileUploadService: Partial<FileUploadService> = {}
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileUploadService,
        {provide: FileUploadService, useValue: mockFileUploadService}
      ],
    }).compile();

    service = module.get<FileUploadService>(FileUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
