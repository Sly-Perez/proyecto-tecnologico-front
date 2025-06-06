import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {

  @ViewChild('stepper') stepper!: MatStepper;  // ⬅️ Referencia al mat-stepper

  idCursoSeleccionado: number | null = null;

  guardarIdCurso(id: number): void {
    this.idCursoSeleccionado = id;
    console.log('ID recibido en el padre:', id);

    // ⬅️ Avanzar automáticamente al siguiente paso
    if (this.stepper) {
      this.stepper.next();
    }
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
