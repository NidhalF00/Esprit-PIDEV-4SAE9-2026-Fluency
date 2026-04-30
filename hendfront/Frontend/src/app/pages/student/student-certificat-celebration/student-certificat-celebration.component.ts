import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { QuizResult, quizResultHasCertificatInfo } from '../../../models/quiz-result.model';
import { CertificatService } from '../../../services/certificat.service';

@Component({
  selector: 'app-student-certificat-celebration',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './student-certificat-celebration.component.html',
  styleUrl: './student-certificat-celebration.component.scss',
})
export class StudentCertificatCelebrationComponent {
  private certificats = inject(CertificatService);

  @Input({ required: true }) result!: QuizResult;

  protected visible(): boolean {
    return quizResultHasCertificatInfo(this.result);
  }

  protected pdfDisponible(): boolean {
    return !!(
      this.result.pdfDisponible ||
      this.result.certificatPdfUrl?.trim() ||
      this.result.certificatId != null
    );
  }

  downloadPdf(): void {
    const id = this.result.certificatId;
    if (id != null) {
      const name =
        this.result.codeCertificat != null && this.result.codeCertificat.length > 0
          ? `${this.result.codeCertificat}.pdf`
          : undefined;
      this.certificats.telechargerPdfById(id, name);
      return;
    }
    const abs = this.certificats.absolutePdfHrefForQuizResult(this.result);
    if (abs) {
      this.certificats.telechargerDepuisUrlAbsolue(
        abs,
        this.result.codeCertificat != null && this.result.codeCertificat.length > 0
          ? `${this.result.codeCertificat}.pdf`
          : 'certificat.pdf',
      );
    }
  }
}
