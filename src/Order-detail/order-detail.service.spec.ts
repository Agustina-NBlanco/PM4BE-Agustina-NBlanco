import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailService } from './order-detail.service';

describe('OrderDetailService', () => {
  let service: OrderDetailService;

  const mockOrder = {
    price: 0,
    order: {},
    products: []
  }

  beforeEach(async () => {


    const mockOrderDetailService: Partial<OrderDetailService> = {
      createOrderDetailService: jest.fn().mockResolvedValue(mockOrder)
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: OrderDetailService,
        useValue: mockOrderDetailService
      }],
    }).compile();

    service = module.get<OrderDetailService>(OrderDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined and return an object', async () => {
    expect(service.createOrderDetailService).toBeDefined()
    expect(await service.createOrderDetailService(mockOrder)).toEqual(mockOrder)
  })
});
