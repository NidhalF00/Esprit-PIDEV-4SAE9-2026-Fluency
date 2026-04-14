import { Component, OnInit } from '@angular/core';
import { ApplicationService, Application } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applications: Application[] = [];
  selectedAppId!: number;

  constructor(private appService: ApplicationService) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.appService.getAll().subscribe(data => {
      this.applications = data;
    });
  }

  // ✅ programmer slots
  scheduleInterview(appId: number) {
    const slots = [
      new Date(Date.now() + 86400000).toISOString(),
      new Date(Date.now() + 2 * 86400000).toISOString()
    ];

    this.appService.createSlots(appId, slots)
      .subscribe({
        next: () => {
          alert('Interview slots created and email sent ✅');
          this.loadApplications();
        },
        error: () => alert('Error creating slots ❌')
      });
  }
}