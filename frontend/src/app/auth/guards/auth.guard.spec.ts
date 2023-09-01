import { TestBed } from '@angular/core/testing';
import { Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/app/services/user.service';

class MockUserService {
  currentUser = { token: 'your_token_here' }; // Simula l'utente autenticato
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: UserService, useClass: MockUserService },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate when user is authenticated', () => {
    const canActivate = guard.canActivate(null!, { url: '/protected' } as RouterStateSnapshot);

    expect(canActivate).toBe(true);
  });


  });
