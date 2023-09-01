import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterPageComponent } from './register-page.component';
import { UserService } from 'src/app/services/user.service';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: Router;

  beforeEach(() => {
    // Crea uno spy per il UserService
    userService = jasmine.createSpyObj('UserService', ['register']);

    TestBed.configureTestingModule({
      declarations: [RegisterPageComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: { returnUrl: '/dashboard' },
            },
          },
        },
        { provide: UserService, useValue: userService },
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy() } },
      ],
    });

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  });
