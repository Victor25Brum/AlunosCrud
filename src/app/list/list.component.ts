import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  alunos: any[] = [];
  cursos: string[] = ['Engenharia', 'Administração', 'Direito', 'Física', 'História', 'Administração'];

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunoService.getAlunos().subscribe(data => {
      this.alunos = data.map(aluno => ({ ...aluno, editando: false })); // Inicializa editando como false para todos os alunos
    });
  }

  editarAluno(aluno: any): void {
    aluno.editando = true;
  }

  salvarAluno(aluno: any): void {
    this.alunoService.updateAluno(aluno.id, aluno).subscribe(() => {
      aluno.editando = false; // Marca como editando false após salvar com sucesso
      alert('Aluno atualizado com sucesso!');
    }, error => {
      console.error('Erro ao atualizar aluno:', error);
      alert('Erro ao atualizar aluno. Por favor, tente novamente.');
    });
  }

  excluirAluno(id: number): void {
    this.alunoService.deleteAluno(id).subscribe(() => {
      this.alunos = this.alunos.filter(aluno => aluno.id !== id);
      alert('Aluno excluído com sucesso!');
    }, error => {
      console.error('Erro ao excluir aluno:', error);
      alert('Erro ao excluir aluno. Por favor, tente novamente.');
    });
  }

  verDetalhes(aluno: any): void {
    this.router.navigate(['/details', aluno.id]);
  }
}
