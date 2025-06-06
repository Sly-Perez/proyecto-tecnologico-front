import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  displayedColumns: string[] = ['idPaquete', 'curso', 'evaluacion', 'precioComprado', 'codigoCarpeta'];
  dataSource: any[] = [];
  usuario: any = null;
  compras: any[] = [];
  
  constructor(private router: Router, private http: HttpClient){}
  
  ngOnInit(): void {
    this.fetchUserData();
    this.fetchUserPackagesData();
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
        console.log(this.usuario)
        },
        error: (error) => {
          console.error('Error en la petición:', error);
          if(error.status == 401){
            this.router.navigate(['/formulario']);
          }
        }
      });
  }

  fetchUserPackagesData(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}` || ""
    });
    
    this.http.get<any[]>('http://localhost:3001/api/usuario/mis/compras', { headers })
    .subscribe({
      next: (response: any[]) => {

        this.dataSource = response.flatMap((orden: any) => {
          return orden.map((detalle: any) => ({
            idPaquete: orden.id_paquete,
            curso: orden.nombre,
            evaluacion: detalle.cod_carpeta,
            precioComprado: detalle.precio_unitario,
            codigoCarpeta: detalle.id_evaluacion,
          }));
        });
      },
      error: (error) => {
        console.error('Error en la petición:', error);
        if (error.status == 401) {
          this.router.navigate(['/formulario']);
        }
      }
    });
  }
}