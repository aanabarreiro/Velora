import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producao-iniciada',
  imports: [],
  templateUrl: './producao-iniciada.html',
  styleUrl: './producao-iniciada.scss',
})
export class ProducaoIniciada {

constructor(private router: Router) {}

  
  orderNumber = '12345';
  client = '202 - DASS NORDESTE - ITAPIPOCA';
  article = '3404 - NAPA OUTDOOR';
  color = 'STONE KHAKI';
  finishType = 'SEM ESTAMPA';
  thickness = '09/11';
  purchaseOrder = '14749476';
  touch = 'MACIO';

  ProducaoIniciada() { 
    this.router.navigate(['/producao-iniciada'])}
  
 
  finalizarProducao() { 
    this.router.navigate(['/tela-inicial-operadores'])
  }

  DetalheParada() {
    this.router.navigate(['/detalhe-parada'])
  }
}
