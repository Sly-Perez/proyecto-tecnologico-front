import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {
  value = '';
  favoriteCurso: any;
  cursos: any[] = [];
  idcurso: any;

  @Output() cursoSeleccionado = new EventEmitter<number>(); // ⬅️ Emite el ID al padre

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.buscarCursos('');
  }

  buscarCursos(nombre: string): void {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const nombreParam = nombre.trim().replace(/ /g, '_');

    this.http.get<any[]>(`http://localhost:3001/api/curso/nombre/a`, { headers })
      .subscribe({
        next: (data) => {
          this.cursos = data;
          console.log('Cursos recibidos:', data);
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
      this.cursoSeleccionado.emit(this.idcurso); // ⬅️ Emisión hacia el padre
    }
  }
}
