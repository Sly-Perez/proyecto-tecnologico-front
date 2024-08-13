import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
	value = '';
	favoriteCurso: string | undefined;
  	curso: string[] = ['IND284: FINANZAS INDUSTRIALES', 
		'ECO204:	ECONOMÍA GENERAL', 
		'IEE272:	ELECTRICIDAD INDUSTRIAL', 
		'IND270:	PROCESOS INDUSTRIALES',
		'IND290:	SEGURIDAD INTEGRAL',
		'ING217:RESISTENCIA DE MATERIALES 1A', 
		'IND270:	PROCESOS INDUSTRIALES'];
}
