import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Module } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';
import { ModuleDetailComponent } from './module-detail.component';
import { MatTableModule } from '@angular/material/table';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

type ModuleServiceSpy = {
  getById: ReturnType<typeof vi.fn>;
};

describe('ModuleDetailComponent', () => {
  let fixture: ComponentFixture<ModuleDetailComponent>;
  let component: ModuleDetailComponent;
  let router: Router;
  let paramMap$ = new BehaviorSubject(convertToParamMap({}));
  let moduleServiceSpy: ModuleServiceSpy;

  beforeEach(async () => {
    moduleServiceSpy = {
      getById: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), MatTableModule],
      declarations: [ModuleDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: paramMap$.asObservable(),
          },
        },
        {
          provide: ModuleService,
          useValue: moduleServiceSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ModuleDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load module when route id is valid', () => {
    const expectedModule: Module = {
      id: 5,
      titre: 'Titre',
      description: 'Description',
      niveau: 'Intermédiaire',
      categorie: 'Catégorie',
      dureeTotale: 12,
      actif: true,
      cours: [],
    };

    moduleServiceSpy.getById.mockReturnValue(of(expectedModule));
    paramMap$.next(convertToParamMap({ id: '5' }));

    expect(moduleServiceSpy.getById).toHaveBeenCalledWith(5);
    expect(component.module).toEqual(expectedModule);
    expect(component.loading()).toBe(false);
  });

  it('should navigate to modules when route id is invalid', () => {
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    paramMap$.next(convertToParamMap({ id: 'invalid' }));

    expect(navigateSpy).toHaveBeenCalledWith(['modules']);
    expect(component.module).toBeNull();
    expect(component.loading()).toBe(false);
  });

  it('should alert and navigate when getById fails', () => {
    const alertSpy = vi.spyOn(window, 'alert');
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    moduleServiceSpy.getById.mockReturnValue(throwError(() => new Error('Network error')));
    paramMap$.next(convertToParamMap({ id: '5' }));

    expect(alertSpy).toHaveBeenCalledWith('Module introuvable.');
    expect(navigateSpy).toHaveBeenCalledWith(['modules']);
    expect(component.module).toBeNull();
    expect(component.loading()).toBe(false);
  });

  it('back() should navigate to module list', () => {
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    component.back();

    expect(navigateSpy).toHaveBeenCalledWith(['modules']);
  });

  it('edit() should navigate to edit when module exists', () => {
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    component.module = {
      id: 9,
      titre: 'Titre',
      description: 'Description',
      niveau: 'Avancé',
      categorie: 'Catégorie',
      dureeTotale: 8,
      actif: false,
      cours: [],
    };

    component.edit();

    expect(navigateSpy).toHaveBeenCalledWith(['modules', 'edit', 9]);
  });

  it('edit() should not navigate when module is null', () => {
    const navigateSpy = vi.spyOn(router, 'navigate');
    component.module = null;

    component.edit();

    expect(navigateSpy).not.toHaveBeenCalled();
  });
});
