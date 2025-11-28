import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-parada',
  imports: [FormsModule, CommonModule],
  templateUrl: './detalhe-parada.html',
  styleUrl: './detalhe-parada.scss',
})
export class DetalheParada {

  constructor(private router: Router) {}

  orderId = 'OS-12345';
  stopType = '';
  stopTypes = ['Manutenção', 'Falta de material', 'Set Up', 'Outro', 'Falha técnica', 'Falta de luz'];
  detail = '';

  cancel() {
    this.detail = '';
    this.stopType = '';

    localStorage.setItem('resumeTimer', '1');

    alert('Parada cancelada');

    this.router.navigate(['/producao-iniciada']);
  }

  submit() {
    console.log({ orderId: this.orderId, stopType: this.stopType, detail: this.detail });
    alert('Enviado');

    localStorage.removeItem('resumeTimer');
    localStorage.removeItem('savedTimeLeft');

    this.router.navigate(['/tela-inicial-operadores']);
  }
}
