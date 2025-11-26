import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial-operadores',
  imports: [CommonModule],
  templateUrl: './tela-inicial-operadores.html',
  styleUrl: './tela-inicial-operadores.scss'
})


export class TelaInicialOperadores {
  constructor(private router: Router) {}

  
  orderNumber = '12345';
  client = '202 - DASS NORDESTE - ITAPIPOCA';
  article = '3404 - NAPA OUTDOOR';
  color = 'STONE KHAKI';
  finishType = 'SEM ESTAMPA';
  thickness = '09/11';
  purchaseOrder = '14749476';
  touch = 'MACIO';

  ProducaoIniciada() { console.log('Iniciar produção'); }
  
 
  finishProduction() { console.log('Finalizar produção'); }

  DetalheParada() {
    this.router.navigate(['/detalhe-parada'])
  }
}