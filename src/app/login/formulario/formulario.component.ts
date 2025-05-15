import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
	value1 = '';
  value2 = ''; 
	constructor(private router: Router, private http: HttpClient){

  }

  clickLogo(){
    this.router.navigate(['/inicio']);
  }

  login(){
    console.log('Correo:', this.value1);
    console.log('Contraseña:', this.value2);

    const body = {
      correo: this.value1,
      contrasenha: this.value2
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<{ token: string }>('http://localhost:3001/api/estudiante/login', body, { headers })
      .subscribe({
        next: (response) => {
          console.log('LOGEADO');

          localStorage.setItem('jwt', response.token);

          // Por ejemplo, redireccionar a otra página luego de login exitoso
          this.router.navigate(['/inicio']);

        },
        error: (error) => {
          console.error('Error en la petición:', error);
        }
      });



  }
}
