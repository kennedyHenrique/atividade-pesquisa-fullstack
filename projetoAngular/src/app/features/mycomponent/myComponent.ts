import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  template: `<a href="#" (click)="navigateToDetail($event)">Detail Page</a>`,
})
export class Navbar {
  private router = inject(Router);
  navigateToDetail(event: Event) {
    event.preventDefault();
    //this.analytics.trackEvent('navigation', '/details');
    this.router.navigate(['/details']);
  }
}

