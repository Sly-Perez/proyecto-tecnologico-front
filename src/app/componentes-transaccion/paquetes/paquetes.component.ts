import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';

export interface Elementos {
  position: number;
  paquete: string;
  precio: number;
  estado: string;
  
}

const ELEMENTOS_DATA: Elementos[] = [
  {position: 1, paquete: 'PC1', precio: 10, estado: ''},
  {position: 2, paquete: 'PC2', precio: 10, estado: 'vendido'},
  {position: 3, paquete: 'PC3', precio: 10, estado: ''},
  {position: 4, paquete: 'PC4', precio: 10, estado: ''},
  {position: 5, paquete: 'EX1', precio: 20, estado: ''},
  {position: 6, paquete: 'EX2', precio: 20, estado: ''}
];

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export class PaquetesComponent {
	
	value='';
	displayedColumns: string[] = ['select', 'paquete', 'precio', 'estado'];
  dataSource = new MatTableDataSource<Elementos>(ELEMENTOS_DATA);
  selection = new SelectionModel<Elementos>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Elementos): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
