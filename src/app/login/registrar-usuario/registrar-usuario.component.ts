import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
  value1 = '';
  value2 = ''; 
  TipoCargo: string | undefined;
  cargo: string[] = ['Trabajador Comercial', 'Personal Externo'];
//intento de que el logo cambie de color
  logoSrc: string = '../../assets/me_logo_2.png'; 

  constructor(private router: Router) {
    this.updateLogo(window.innerWidth);
	window.addEventListener('resize', () => this.updateLogo(window.innerWidth));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateLogo(event.target.innerWidth);
  }

  updateLogo(width: number) {
    if (width <= 790) {
      this.logoSrc = '../../assets/me_logo.svg'; 
    } else {
      this.logoSrc = '../../assets/me_logo_2.png'; 
    }
  }

  clickLogo() {
    this.router.navigate(['/inicio']);
  }
}
