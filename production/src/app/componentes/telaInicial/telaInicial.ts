import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-telaInicial',
  imports: [],
  templateUrl: './telaInicial.html',
  styleUrl: './telaInicial.scss'
})

export class TelaInicial {

pedidosNaoIniciados = ['OS-58762', 'OS-56487', 'OS-21653', 'OS-53109', 'OS-76021'];

  setores = [
    { nome: 'Pré recrutamento', responsavel: 'Ezequiel', atraso: 0 },
    { nome: 'Acabamento', responsavel: 'Vagner', atraso: 3 },
    { nome: 'Secagem', responsavel: 'Luis', atraso: 0 },
    { nome: 'Pré acabamento', responsavel: 'Ezequiel', atraso: 0 },
    { nome: 'Expedição', responsavel: 'Vagner', atraso: 1 },
    { nome: 'Matéria prima', responsavel: 'Luis', atraso: 0 },
  ];
}



