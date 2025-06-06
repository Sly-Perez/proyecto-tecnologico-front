import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrl: './form-venta.component.css'
})
export class FormVentaComponent {
	value = ''; 
	noEncontrado=false;
  usuario: any = null;
  
  constructor(private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}` || ""
    });

    this.http.get('http://localhost:3001/api/usuario/mi/perfil', { headers })
      .subscribe({
        next: (response) => {
          this.usuario = response;
        },
        error: (error) => {
          console.error('Error en la petición:', error);
          this.router.navigate(['/formulario']);
        }
      });
  }

}
