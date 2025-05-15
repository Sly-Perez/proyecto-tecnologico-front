import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  displayedColumns: string[] = ['idOrdenPago', 'fecha', 'precioOriginal', 'precioConDescuento', 'montoPagado'];
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
    
    this.http.get('http://localhost:3001/api/estudiante/mi/perfil', { headers })
    .subscribe({
      next: (response) => {
        this.usuario = response;
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
    
    this.http.get<any[]>('http://localhost:3001/api/estudiante/mis/compras', { headers })
    .subscribe({
      next: (response: any[]) => {
        this.dataSource = response.flatMap((orden: any) => {
          return orden.detallesOrdenesPagos.map((detalle: any) => ({
            idOrdenPago: orden.idOrdenPago,
            fecha: orden.fecha,
            montoPagado: detalle.montoPagado,
            precioOriginal: detalle.paquete.precio,
            precioConDescuento: detalle.paquete.precioConDescuento,
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