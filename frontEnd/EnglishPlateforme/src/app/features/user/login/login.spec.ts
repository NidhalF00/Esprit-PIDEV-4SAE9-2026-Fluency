import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AuthService } from '../../../services/auth.service';
import { LoginComponent } from './login';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect SUPER_ADMIN users to the admin dashboard', () => {
    authServiceSpy.login.and.returnValue(of({
      token: 'fake-token-for-test',
      user: { id: 'user-id', role: 'SUPER_ADMIN' }
    }));

    component.loginForm.setValue({
      email: 'admin@example.com',
      password: 'password-for-test'
    });

    component.onSubmit();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin/dashboard']);
    expect(component.errorMessage).toBe('');
  });

  it('should show a clear message for invalid login credentials', () => {
    authServiceSpy.login.and.returnValue(throwError(() => new HttpErrorResponse({ status: 401 })));

    component.loginForm.setValue({
      email: 'student@example.com',
      password: 'password-for-test'
    });

    component.onSubmit();

    expect(component.errorMessage).toBe('Invalid email or password.');
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
