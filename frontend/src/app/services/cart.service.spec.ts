import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let cartService: CartService;

  // Mocking local storage for testing
  const storageMock = {
    getItem: (key: string) => {},
    setItem: (key: string, value: string) => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService,
        { provide: Storage, useValue: storageMock },
      ],
    });
    cartService = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should add an item to the cart', () => {
    const food: any= { id: '1', name: 'Food', price: 10 };
    cartService.addToCart(food);
    const cart = cartService.getCart();
    expect(cart.items.length).toBe(1);
  });

  it('should remove an item from the cart', () => {
    const food: any= { id: '1', name: 'Food', price: 10 };
    cartService.addToCart(food);
    cartService.removeFromCart(food.id);
    const cart = cartService.getCart();
    expect(cart.items.length).toBe(0);
  });

  it('should change item quantity in the cart', () => {
    const food: any = { id: '1', name: 'Food', price: 10 };
    cartService.addToCart(food);
    cartService.changeQuantity(food.id, 2);
    const cart = cartService.getCart();
    const cartItem = cart.items.find(item => item.food.id === food.id);
    expect(cartItem?.quantity).toBe(2);
  });

  it('should clear the cart', () => {
    const food: any = { id: '1', name: 'Food', price: 10 };
    cartService.addToCart(food);
    cartService.clearCart();
    const cart = cartService.getCart();
    expect(cart.items.length).toBe(0);
  });

  // Additional tests for edge cases and observables can be added
});
