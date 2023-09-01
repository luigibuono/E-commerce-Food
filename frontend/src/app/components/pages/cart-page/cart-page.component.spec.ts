import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartPageComponent } from './cart-page.component';
import { CartService } from 'src/app/services/cart.service';
import { of } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      providers: [CartService],
    });

    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);

    // Mock del servizio per restituire un carrello fittizio
    const mockCart: Cart = {
      items: [],
      totalPrice: 0,
      totalCount: 0
    };

    spyOn(cartService, 'getCartObservable').and.returnValue(of(mockCart));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cart items and total', () => {
    fixture.detectChanges(); // Attiva il ciclo di rilevamento dei cambiamenti


  });



});
