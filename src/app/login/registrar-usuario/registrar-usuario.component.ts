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
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
  
  nombreCompleto: string = '';
  apellido: string = '';
  dni: string = '';
  correo: string = '';
  contrasenha: string = '';
  telefono: string = '';

  //intento de que el logo cambie de color
  logoSrc: string = '../../assets/me_logo_2.png'; 

  constructor(private router: Router, private http: HttpClient) {
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

  grabar() {

    const body = {
      nombreCompleto: this.nombreCompleto,
      apellido: this.apellido,
      dni: this.dni,
      correo: this.correo,
      contrasenha: this.contrasenha,
      telefono: this.telefono
    };

    console.log('Datos para enviar:', body);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:3001/api/estudiante/', body, { headers })
      .subscribe({
        next: (response) => {
          this.router.navigate(['/formulario']);
        },
        error: (error) => {
          console.error('Error en la petición:', error);
        }
      });

  }
}
