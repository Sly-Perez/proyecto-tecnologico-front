import { Component, Input, Output, EventEmitter } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Paquetes {
  idPaquete: number,
  curso: string,
  evaluacion: string,
  precio: number,
}

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export class PaquetesComponent {
  @Input() curso: any = null;
	
	value='';
	displayedColumns: string[] = ['idPaquete', 'curso', 'evaluacion', 'precio'];
  dataSource: any[] = [];
  selection = new SelectionModel<Paquetes>(true, []);

  evaluaciones: any[] = [];
  favoriteEvaluacion: any = null;

  constructor(private router: Router, private http: HttpClient){}

  ngOnChanges() {
    // Called every time the input changes
    if (this.curso) {
      this.fetchEvaluacionesByIdCurso();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Paquetes): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }


  fetchEvaluacionesByIdCurso(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}` || ""
    });
    
    this.http.get<any[]>(`http://localhost:3001/api/curso/${this.curso.id_curso}/evaluaciones`, { headers })
    .subscribe({
      next: (response: any[]) => {

        response.unshift({
          id_evaluacion: "Todos",
          id_curso: this.curso.id_curso,
          estado: true
        });

        this.evaluaciones = response;

        this.favoriteEvaluacion = response[0];

        this.fetchPaquetesByIdCursoAndIdEvaluacion(true);

      },
      error: (error) => {
        console.error('Error en la petición:', error);

        if(error.status = 404){
          this.evaluaciones = [];

          this.favoriteEvaluacion = null;
        }

        if (error.status == 401) {
          this.router.navigate(['/formulario']);
        }
      }
    });
  }

  fetchPaquetesByIdCursoAndIdEvaluacion(mostrarTodos: boolean = false): void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}` || ""
    });

    const apiUrl = (mostrarTodos) ? `http://localhost:3001/api/curso/paquetes/${this.curso.id_curso}` : `http://localhost:3001/api/curso/${this.curso.id_curso}/evaluaciones/${this.favoriteEvaluacion.id_evaluacion}/paquete`;

  this.http.get<Paquetes[]>(apiUrl, { headers })
    .subscribe({
      next: (response: any) => {

        if(mostrarTodos){
          this.dataSource = response.map((item: any)=>({
              idPaquete: item.id_paquete,
              curso: item.curso.nombre,
              evaluacion: item.id_evaluacion,
              precio: (item.precio_con_descuento != 0) ? item.precio_con_descuento : item.precio
          }));
        }
        else{
          this.dataSource = [{
              idPaquete: response.id_paquete,
              curso: response.nombre,
              evaluacion: response.id_evaluacion,
              precio: (response.precio_con_descuento != 0) ? response.precio_con_descuento : response.precio
          }];
        }

      },
      error: (error) => {
        console.error('Error en la petición:', error);
        if (error.status == 401) {
          this.router.navigate(['/formulario']);
        }
      }
    });
  }


  setFavoriteEvaluacion(evaluacion: any){
    this.favoriteEvaluacion = evaluacion;

    if(evaluacion.id_evaluacion.toLowerCase() == "todos"){
      this.fetchPaquetesByIdCursoAndIdEvaluacion(true);
    }
    else{
      this.fetchPaquetesByIdCursoAndIdEvaluacion();
    }
  }
}
