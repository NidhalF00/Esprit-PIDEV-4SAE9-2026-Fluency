import { Component, OnInit } from '@angular/core';
import { ApplicationService, Application } from 'src/app/services/application.service';
import { saveAs } from 'file-saver'; // npm install file-saver

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  applications: Application[] = [];
  total = 0;
  pending = 0;
  scheduled = 0; // par exemple, status INTERVIEW_SCHEDULED

  constructor(private appService: ApplicationService) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.appService.getAll().subscribe(data => {
      this.applications = data;
      this.total = data.length;
      this.pending = data.filter(a => a.status === 'PENDING').length;
      this.scheduled = data.filter(a => a.status === 'INTERVIEW_SCHEDULED').length;
    });
  }

  // Pour colorer les statuts
  getStatusColor(status: string) {
    switch(status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'ACCEPTED': return 'bg-green-100 text-green-800';
      case 'REJECTED': return 'bg-red-100 text-red-800';
      case 'INTERVIEW_SCHEDULED': return 'bg-blue-100 text-blue-800';
      default: return '';
    }
  }

  programInterview(appId: number) {
    const link = prompt("Enter the interview link (Meet, Zoom, etc.):");
    if (link && link.trim() !== '') {
      this.appService.scheduleInterview(appId, link.trim()).subscribe({
        next: () => {
          alert('Interview scheduled successfully ✅');
          this.loadApplications();
        },
      });
    }
  }

  acceptApplication(app: Application) {
    if (!app.id) return;

    const teacherEmail = prompt("Enter teacher email:");
    const teacherPassword = prompt("Enter teacher password:");

    if (!teacherEmail || !teacherPassword) {
      alert("Email and password required ❌");
      return;
    }

    this.appService.changeStatusToAccepted(app.id, 'ACCEPTED', teacherEmail, teacherPassword)
      .subscribe({
        next: () => {
          this.loadApplications();
        },
      });
  }

  // Télécharger le CV
  downloadCv(appId: number) {
    if (!appId) return;

    this.appService.downloadCv(appId)
      .subscribe({
        next: (blob) => {
          const app = this.applications.find(a => a.id === appId);
          const fileName = app?.cvPath?.split('/').pop() || 'cv.pdf';
          saveAs(blob, fileName);
        },
        error: (err) => console.error('Download error:', err)
      });
  }

  rejectApplication(app: Application) {
    if (!app.id) return;

    const teacherEmail = prompt("Enter teacher email:");
    if (!teacherEmail ) {
      alert("Email required ❌");
      return;
    }

    if (!confirm("Are you sure you want to reject this application?")) return;

    this.appService.changeStatusToRejected(app.id, 'REJECTED', teacherEmail)
      .subscribe({
        next: () => {
          this.loadApplications();
        },
      });
  }
}
