import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  titulo = 'Professor'
  professores = [
    { nome: "Adalberto" },
    { nome: "Erica" },
    { nome: "Fabiana" },
    { nome: "Gisele" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
