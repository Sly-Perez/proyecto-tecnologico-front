import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})

export class CursoComponent {

  @Output() cursoSeleccionado = new EventEmitter<any>();

	nombre = ''; 
	favoriteCurso: any = null;
	curso: any[] = [];
  idCurso: number | undefined;

	constructor(private router: Router, private http: HttpClient){}
	  
	ngOnInit(): void {
		this.fetchCursos('all');
	}

	fetchCursos(nombre: string): void {

    if(nombre.trim() == ''){
      nombre = 'all';
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwt")}` || ""
    });
    
    this.http.get<any[]>('http://localhost:3001/api/curso/nombre/' + nombre.trim(), { headers })
    .subscribe({
      next: (response: any[]) => {
        this.curso = response;

        this.favoriteCurso = response[0];

        this.cursoSeleccionado.emit(this.favoriteCurso);
      },
      error: (error) => {
        console.error('Error en la petición:', error);

        if(error.status = 404){
          this.curso = [];
        }

        if (error.status == 401) {
          this.router.navigate(['/formulario']);
        }
      }
    });
  }

}
