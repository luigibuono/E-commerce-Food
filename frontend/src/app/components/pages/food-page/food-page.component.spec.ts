import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { FoodPageComponent } from './food-page.component';
import { FoodService } from 'src/app/services/food.service';
import { CartService } from 'src/app/services/cart.service';

describe('FoodPageComponent', () => {
  let component: FoodPageComponent;
  let fixture: ComponentFixture<FoodPageComponent>;
  let activatedRoute: ActivatedRoute;
  let foodService: jasmine.SpyObj<FoodService>;
  let cartService: jasmine.SpyObj<CartService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    activatedRoute = {
      params: of({ id: '1' }), // Simula i parametri passati all'attivazione
    } as any;

    foodService = jasmine.createSpyObj('FoodService', ['getFoodById']);
   
    cartService = jasmine.createSpyObj('CartService', ['addToCart']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [FoodPageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: FoodService, useValue: foodService },
        { provide: CartService, useValue: cartService },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(FoodPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch food details when initialized', () => {
    fixture.detectChanges(); // Attiva il ciclo di rilevamento dei cambiamenti

    expect(foodService.getFoodById).toHaveBeenCalledWith('1');

  });

  it('should add food to cart and navigate to cart page', () => {
    fixture.detectChanges(); // Attiva il ciclo di rilevamento dei cambiamenti

    component.addToCart();


    expect(router.navigateByUrl).toHaveBeenCalledWith('/cart-page');
  });
});
