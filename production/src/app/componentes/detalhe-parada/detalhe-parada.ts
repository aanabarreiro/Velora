import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalhe-parada',
  imports: [FormsModule, CommonModule],
  templateUrl: './detalhe-parada.html',
  styleUrl: './detalhe-parada.scss',
})
export class DetalheParada {

  orderId = 'OS-12345';
  stopType = '';
  stopTypes = ['Manutenção', 'Falta de material', 'Qualidade', 'Outro'];
  detail = '';

  cancel() {
    this.detail = '';
    this.stopType = '';
    alert('Parada cancelada');
  }

  submit() {
    console.log({ orderId: this.orderId, stopType: this.stopType, detail: this.detail });
    alert('Enviado');
  }
}
