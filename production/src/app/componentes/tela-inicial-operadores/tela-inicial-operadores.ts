import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-inicial-operadores',
  imports: [],
  templateUrl: './tela-inicial-operadores.html',
  styleUrl: './tela-inicial-operadores.scss'
})


export class TelaInicialOperadores {
  // Here you can hook data-binding if you want dynamic values
  orderNumber = '12345';
  client = '202 - DASS NORDESTE - ITAPIPOCA';
  article = '3404 - NAPA OUTDOOR';
  color = 'STONE KHAKI';
  finishType = 'SEM ESTAMPA';
  thickness = '09/11';
  purchaseOrder = '14749476';
  touch = 'MACIO';

  // Example action handlers (no real logic, placeholders)
  startProduction() { console.log('Iniciar produção'); }
  pauseProduction() { console.log('Pausar produção'); }
  finishProduction() { console.log('Finalizar produção'); }
}
