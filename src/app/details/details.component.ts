import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']  // Adicione o arquivo SCSS aqui se necessário
})
export class DetailsComponent implements OnInit {
  aluno: any; // Objeto para armazenar os detalhes do aluno

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    const alunoId = this.route.snapshot.params['id']; // Obtém o ID do aluno da rota
    this.alunoService.getAlunoById(alunoId)
      .subscribe(data => {
        this.aluno = data; // Atribui os dados do aluno obtidos da API ao objeto aluno
      });
  }

  voltarParaLista(): void {
    this.router.navigate(['/list']);
  }
}
