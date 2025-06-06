import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// INTERFAZ RECOMENDADA
interface Paquete {
  id_paquete: number;
  id_evaluacion: string;
  precio: string;
  precio_con_descuento: string;
  estado: boolean;
  curso: {
    id_curso: number;
    nombre: string;
  };
}

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export class PaquetesComponent implements OnChanges {

  @Input() idCurso: number | null = null;// ⬅️ Recibido desde <app-curso>
  value = '';
  displayedColumns: string[] = ['select', 'paquete', 'precio', 'estado'];
  dataSource = new MatTableDataSource<Paquete>([]);
  selection = new SelectionModel<Paquete>(true, []);

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idCurso'] && this.idCurso !==null) {
      this.obtenerPaquetesPorCurso(this.idCurso);
    }
  }

  obtenerPaquetesPorCurso(idCurso: number): void {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Paquete[]>(`http://localhost:3001/api/curso/paquetes/${idCurso}`, { headers })
      .subscribe({
        next: (data) => {
          console.log('Paquetes recibidos para curso ID', idCurso, ':', data);
          this.dataSource.data = data;
        },
        error: (error) => {
          console.error('Error al obtener paquetes:', error);
        }
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Paquete): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} paquete ${row.id_paquete}`;
  }
}
