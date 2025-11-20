import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tela-inicial-encarregados',
  imports: [CommonModule],
  templateUrl: './tela-inicial-encarregados.html',
  styleUrl: './tela-inicial-encarregados.scss'
})

export class TelaInicialEncarregados {
 pendencias = [
    'OS-58762',
    'OS-56487',
    'OS-21653',
    'OS-53109',
    'OS-76021'
  ];

  maquinas = [
    {
      nome: 'Enxugadeira contínua',
      usuario: 'Carlos',
      os: 'OS-12345',
      tempo: '3 horas e 24 minutos',
      status: { tipo: 'vermelho', texto: 'OP em atraso' }
    },
    {
      nome: 'Divisora',
      usuario: 'Aristeu',
      os: 'OS-54321',
      tempo: '1 hora e 32 minutos',
      status: { tipo: 'amarelo', texto: '30 min até a finalização' }
    },
    {
      nome: 'Rebaixadeira',
      usuario: 'José',
      os: 'OS-89641',
      tempo: '54 minutos',
      status: { tipo: 'azul', texto: '2 horas até a finalização' }
    }
  ];
}

