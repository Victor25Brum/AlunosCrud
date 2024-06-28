import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  aluno = {
    nome: '',
    idade: '',
    curso: '',
    email: ''
  };
  cursos: string[] = ['Engenharia', 'Administração', 'Direito', 'Física', 'História', 'Administração'];

  constructor(private alunoService: AlunoService, private router: Router) {}

  adicionarAluno(): void {
    this.alunoService.createAluno(this.aluno).subscribe(
      () => {
        alert('Aluno adicionado com sucesso!');
        this.router.navigate(['/list']);
      },
      error => {
        console.error('Erro ao cadastrar aluno:', error);
        alert('Erro ao cadastrar aluno. Por favor, tente novamente.');
      }
    );
  }
}
