import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HomeComponent } from './home.component';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockFoodService: jasmine.SpyObj<FoodService>;

  beforeEach(() => {
    mockFoodService = jasmine.createSpyObj('FoodService', ['getAllFoodsBySearchTerm', 'getAllFoodsByTag', 'getAll']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ searchTerm: 'pizza' }), // Fornisci i parametri come oggetto
          },
        },
        { provide: FoodService, useValue: mockFoodService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  });
