import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  TutorCvEnglishCheckResponse,
  TutorCvRequest,
  TutorCvResponse,
  TutorCvService
} from '../../services/tutor-cv.service';

interface TutorCvAccess {
  cvId: number;
  editToken: string;
}

@Component({
  selector: 'app-tutor-cv-builder',
  templateUrl: './tutor-cv-builder.component.html',
  styleUrls: ['./tutor-cv-builder.component.css']
})
export class TutorCvBuilderComponent implements OnInit {
  readonly englishLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  private readonly storageKey = 'fluencyTutorCvAccess';

  cvForm: FormGroup;
  savedCvId: number | null = null;
  loading = false;
  successMessage = '';
  errorMessage = '';
  englishCheckLoading = false;
  englishCheckResult: TutorCvEnglishCheckResponse | null = null;
  englishCheckError = '';

  constructor(private fb: FormBuilder, private tutorCvService: TutorCvService) {
    this.cvForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      city: [''],
      country: [''],
      englishLevel: ['', Validators.required],
      yearsOfExperience: [null, Validators.min(0)],
      speciality: [''],
      education: [''],
      certifications: [''],
      skills: [''],
      professionalSummary: ['']
    });
  }

  ngOnInit(): void {
    this.loadSavedCv();
  }

  get preview(): TutorCvRequest {
    return this.buildRequest();
  }

  get skillsList(): string[] {
    return this.splitList(this.cvForm.get('skills')?.value);
  }

  get certificationsList(): string[] {
    return this.splitList(this.cvForm.get('certifications')?.value);
  }

  createCv(): void {
    if (this.cvForm.invalid) {
      this.cvForm.markAllAsTouched();
      this.showError('Please complete the required fields before creating your CV.');
      return;
    }

    this.loading = true;
    this.clearMessages();

    this.tutorCvService.createCv(this.buildRequest()).subscribe({
      next: (response) => {
        this.savedCvId = response.id;
        this.storeAccess({ cvId: response.id, editToken: response.editToken });
        this.patchForm(response);
        this.loading = false;
        this.successMessage = 'CV created. Your secure edit access is saved on this browser.';
      },
      error: () => {
        this.loading = false;
        this.showError('CV Builder is currently unavailable. Please try again later.');
      }
    });
  }

  updateCv(): void {
    const access = this.getStoredAccess();
    if (!access || !this.savedCvId) {
      this.showError('We could not verify edit access for this CV. Please create a new CV or use the same browser where you created it.');
      return;
    }

    if (this.cvForm.invalid) {
      this.cvForm.markAllAsTouched();
      this.showError('Please complete the required fields before updating your CV.');
      return;
    }

    this.loading = true;
    this.clearMessages();

    this.tutorCvService.updateCv(this.savedCvId, access.editToken, this.buildRequest()).subscribe({
      next: (response) => {
        this.patchForm(response);
        this.loading = false;
        this.successMessage = 'CV updated successfully.';
      },
      error: (error) => this.handleAccessError(error, 'Unable to update this CV right now. Please try again later.')
    });
  }

  deleteCv(): void {
    const access = this.getStoredAccess();
    if (!access || !this.savedCvId) {
      this.resetCvAccess();
      return;
    }

    this.loading = true;
    this.clearMessages();

    this.tutorCvService.deleteCv(this.savedCvId, access.editToken).subscribe({
      next: () => {
        this.loading = false;
        this.resetCvAccess();
        this.successMessage = 'CV deleted. You can create a new one whenever you are ready.';
      },
      error: (error) => this.handleAccessError(error, 'Unable to delete this CV right now. Please try again later.')
    });
  }

  printCv(): void {
    window.print();
  }

  checkEnglishQuality(): void {
    const text = this.cvTextForEnglishCheck();
    this.englishCheckResult = null;
    this.englishCheckError = '';

    if (!text) {
      this.englishCheckError = 'Add some CV text before checking English quality.';
      return;
    }

    this.englishCheckLoading = true;
    this.tutorCvService.checkEnglishQuality(text).subscribe({
      next: (response) => {
        this.englishCheckLoading = false;
        this.englishCheckResult = response;
      },
      error: () => {
        this.englishCheckLoading = false;
        this.englishCheckError = 'English check is temporarily unavailable. You can still save and print your CV.';
      }
    });
  }

  resetCvAccess(): void {
    localStorage.removeItem(this.storageKey);
    this.savedCvId = null;
    this.cvForm.reset();
  }

  fieldInvalid(fieldName: string): boolean {
    const field = this.cvForm.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  private loadSavedCv(): void {
    const access = this.getStoredAccess();
    if (!access) {
      return;
    }

    this.loading = true;
    this.tutorCvService.getCv(access.cvId, access.editToken).subscribe({
      next: (response) => {
        this.savedCvId = response.id;
        this.patchForm(response);
        this.loading = false;
        this.successMessage = 'Your saved CV was loaded from this browser.';
      },
      error: (error) => this.handleAccessError(error, 'We could not load your saved CV. Please create a new CV or use the same browser where you created it.')
    });
  }

  private buildRequest(): TutorCvRequest {
    const value = this.cvForm.value;
    const yearsValue = value.yearsOfExperience;

    return {
      fullName: this.clean(value.fullName),
      email: this.clean(value.email),
      phone: this.clean(value.phone),
      city: this.clean(value.city),
      country: this.clean(value.country),
      englishLevel: this.clean(value.englishLevel),
      yearsOfExperience: yearsValue === null || yearsValue === '' ? null : Number(yearsValue),
      speciality: this.clean(value.speciality),
      education: this.clean(value.education),
      certifications: this.clean(value.certifications),
      skills: this.clean(value.skills),
      professionalSummary: this.clean(value.professionalSummary)
    };
  }

  private patchForm(response: TutorCvResponse): void {
    this.cvForm.patchValue({
      fullName: response.fullName || '',
      email: response.email || '',
      phone: response.phone || '',
      city: response.city || '',
      country: response.country || '',
      englishLevel: response.englishLevel || '',
      yearsOfExperience: response.yearsOfExperience ?? null,
      speciality: response.speciality || '',
      education: response.education || '',
      certifications: response.certifications || '',
      skills: response.skills || '',
      professionalSummary: response.professionalSummary || ''
    });
  }

  private getStoredAccess(): TutorCvAccess | null {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) {
      return null;
    }

    try {
      const parsed = JSON.parse(saved) as TutorCvAccess;
      if (!parsed.cvId || !parsed.editToken) {
        return null;
      }

      return parsed;
    } catch {
      return null;
    }
  }

  private storeAccess(access: TutorCvAccess): void {
    localStorage.setItem(this.storageKey, JSON.stringify(access));
  }

  private handleAccessError(error: { status?: number }, fallbackMessage: string): void {
    this.loading = false;
    if (error.status === 403 || error.status === 404) {
      this.resetCvAccess();
      this.showError('We could not verify edit access for this CV. Please create a new CV or use the same browser where you created it.');
      return;
    }

    this.showError(fallbackMessage);
  }

  private showError(message: string): void {
    this.successMessage = '';
    this.errorMessage = message;
  }

  private clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

  private splitList(value: string | null | undefined): string[] {
    if (!value) {
      return [];
    }

    return value
      .split(/[\n,;]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  private clean(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }

  private cvTextForEnglishCheck(): string {
    const cv = this.buildRequest();
    return [
      cv.professionalSummary,
      cv.speciality,
      cv.education,
      cv.certifications,
      cv.skills
    ]
      .filter((value) => !!value && value.trim().length > 0)
      .join('\n\n')
      .slice(0, 4000)
      .trim();
  }
}
