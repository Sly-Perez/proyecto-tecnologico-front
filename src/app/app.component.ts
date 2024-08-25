import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'me-front_end';
  shower = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Check if the current route is "/formulario"
      this.shower = !(this.router.url === '/formulario' || this.router.url === '/registrar-usuario');
    });
  }
}
