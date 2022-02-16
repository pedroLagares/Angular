import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  titulo = 'Aluno';
  alunos = [
    { nome: 'Pedro' },
    { nome: 'Lolis' },
    { nome: 'Thyaguin' },
    { nome: 'Wennedy' },
    { nome: 'Luan' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
