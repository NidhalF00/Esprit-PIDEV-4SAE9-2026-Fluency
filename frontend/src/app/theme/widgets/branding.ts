import { Component, input } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="branding" href="/">
      <svg class="branding-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#0d1b35"/>
        <!-- Speech bubble tail -->
        <path d="M8 32 L14 27 L8 27 Z" fill="#0d1b35"/>
        <!-- Inner gold F letterform -->
        <!-- Vertical stem -->
        <rect x="12" y="10" width="3" height="20" rx="1" fill="#c49a3c"/>
        <!-- Top bar -->
        <rect x="12" y="10" width="16" height="3" rx="1" fill="#c49a3c"/>
        <!-- Middle bar -->
        <rect x="12" y="18" width="12" height="3" rx="1" fill="#c49a3c"/>
        <!-- Gold accent dot -->
        <circle cx="31" cy="11" r="3" fill="#c49a3c" opacity="0.7"/>
      </svg>
      @if (showName()) {
        <span class="branding-name">Fluency</span>
      }
    </a>
  `,
  styles: `
    .branding {
      display: flex;
      align-items: center;
      margin: 0 0.5rem;
      text-decoration: none;
      white-space: nowrap;
      color: inherit;
      border-radius: 50rem;
      gap: 0.5rem;
    }

    .branding-logo {
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
    }

    .branding-name {
      font-family: 'Cormorant Garamond', 'DM Serif Display', serif;
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      background: linear-gradient(135deg, #c49a3c 0%, #e8c977 50%, #c49a3c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `,
})
export class Branding {
  readonly showName = input(true);
}
