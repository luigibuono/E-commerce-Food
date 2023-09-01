import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FoodService } from './food.service';
import { FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';


describe('FoodService', () => {
  let service: FoodService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService],
    });
    service = TestBed.inject(FoodService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica che non ci siano richieste HTTP in sospeso.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all foods', () => {
    const mockFoods: any[] = [
      { id: '1', name: 'Pizza', price: 10.99, tags: ['Fast Food'], /* altre proprietà necessarie */ },
      { id: '2', name: 'Hamburger', price: 8.99, tags: ['Fast Food'], /* altre proprietà necessarie */ },
      // Aggiungi altri cibi mock se necessario
    ];

    service.getAll().subscribe((foods) => {
      expect(foods).toEqual(jasmine.arrayContaining(mockFoods));
    });

    const req = httpTestingController.expectOne(FOODS_URL);
    expect(req.request.method).toEqual('GET');

    req.flush(mockFoods);
  });


  });




