import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-calculo-venta',
  templateUrl: './calculo-venta.component.html',
  styleUrl: './calculo-venta.component.css'
})
export class CalculoVentaComponent {
	constructor(private dialog: MatDialog) {}

	  openDialog() {
	    const dialogRef = this.dialog.open(DialogoComponent,{
		 width: '600px', // Ajusta este valor según lo que necesites
    	 height: '400px',
		});
	
	    dialogRef.afterClosed().subscribe((result:void) => {
	      console.log(`Dialog result: ${result}`);
	    });
	  }
}
