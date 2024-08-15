import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

export interface Elementos {
  position: number;
  producto: string;
  precioBase: number;
  precioDsct: number;
  
}

const ELEMENTOS_DATA: Elementos[] = [
  {position: 1, producto: 'IND284: Lab1', precioBase: 10, precioDsct: 8.5},
  {position: 2, producto: 'ECO204:	Ex1', precioBase: 20, precioDsct: 17},
  {position: 3, producto: 'IEE272:	Lab5', precioBase: 10, precioDsct: 8.5},
  {position: 4, producto: 'IEE272:	Lab7', precioBase: 15, precioDsct: 12.75}
];

@Component({
  selector: 'app-productos-seleccionados',
  templateUrl: './productos-seleccionados.component.html',
  styleUrl: './productos-seleccionados.component.css'
})
export class ProductosSeleccionadosComponent {
  displayedColumns: string[] = ['select', 'producto', 'precioBase', 'precioDsct'];
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
