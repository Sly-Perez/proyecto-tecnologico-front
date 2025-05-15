import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){

  }

  clickLogo(){
    this.router.navigate(['/inicio']);
  }

  cerrarSesion(){
    if(!localStorage.getItem("jwt")){
      this.router.navigate(['/formulario']);
    }
    else{
      localStorage.removeItem("jwt");
      this.router.navigate(['/formulario']);
    }
  }
}
