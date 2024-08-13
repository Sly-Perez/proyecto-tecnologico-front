import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {
	firstFormGroup = this._formBuilder.group({
	    firstCtrl: ['', Validators.required],
	});
	secondFormGroup = this._formBuilder.group({
	    secondCtrl: ['', Validators.required],
	});
	isLinear = false;
	
	constructor(private _formBuilder: FormBuilder) {}
}
