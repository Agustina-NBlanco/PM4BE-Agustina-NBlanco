import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailController } from './order-detail.controller';
import { OrderDetailService } from './order-detail.service';

describe('OrderDetailController', () => {
  let controller: OrderDetailController;
  let service: OrderDetailService

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
      controllers: [OrderDetailController],
      providers: [{
        provide: OrderDetailService,
        useValue: mockOrderDetailService
      }],
    }).compile();

    controller = module.get<OrderDetailController>(OrderDetailController);
    service = module.get<OrderDetailService>(OrderDetailService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined and return an object', async () => {
    expect(service.createOrderDetailService).toBeDefined()
    expect(await service.createOrderDetailService({...mockOrder})).toEqual(mockOrder)
  })
});
