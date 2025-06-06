import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {
  value = '';
  favoriteCurso: any;
  cursos: any[] = [];
  idcurso:any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.buscarCursos(''); // Buscar todos al inicio (o puedes cambiarlo)
  }

  buscarCursos(nombre: string): void {
    const token = localStorage.getItem('jwt');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    // "_" es reemplazado por espacio según tu backend
    const nombreParam = nombre.trim().replace(/ /g, '_');

    this.http.get<any[]>(`http://localhost:3001/api/curso/nombre/a`, { headers })
      .subscribe({
        next: (data) => {
          this.cursos = data;
		  //this.idcurso = data.id_curso;
		  console.log(data)
        },
        error: (err) => {
          console.error('Error al obtener cursos:', err);
        }
      });
  }
  onCursoSeleccionado(): void {
		if (this.favoriteCurso) {
			this.idcurso = this.favoriteCurso.id_curso;
			console.log('Curso seleccionado:', this.favoriteCurso.nombre, 'ID:', this.idcurso);
		}
	}

	irASiguiente(): void {
		if (this.idcurso) {
			this.router.navigate(['/paquetes'], {
			queryParams: { idcurso: this.idcurso }
			});
		} else {
			alert('Selecciona un curso antes de continuar');
		}
	}
}
