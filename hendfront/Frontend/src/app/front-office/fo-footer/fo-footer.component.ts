import { Component } from '@angular/core';

@Component({
  selector: 'app-fo-footer',
  standalone: false,
  templateUrl: './fo-footer.component.html',
  styleUrl: './fo-footer.component.css',
})
export class FoFooterComponent {
  readonly year = new Date().getFullYear();
}
