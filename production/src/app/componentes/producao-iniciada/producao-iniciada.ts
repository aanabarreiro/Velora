import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producao-iniciada',
  imports: [],
  templateUrl: './producao-iniciada.html',
  styleUrl: './producao-iniciada.scss',
})
export class ProducaoIniciada implements OnInit {

  constructor(private router: Router) {}

  orderNumber = '12345';
  client = '202 - DASS NORDESTE - ITAPIPOCA';
  article = '3404 - NAPA OUTDOOR';
  color = 'STONE KHAKI';
  finishType = 'SEM ESTAMPA';
  thickness = '09/11';
  purchaseOrder = '14749476';
  touch = 'MACIO';

  // variáveis timer
  timeLeft!: number;
  timerFormatted: string | null = null;
  intervalId: any = null;

  isPaused: boolean = false;
  savedTimeLeft: number | null = null;

  ngOnInit() {
    // Se existe savedTimeLeft no localStorage e há flag de "retomar", retoma:
    const resumeFlag = localStorage.getItem('resumeTimer');
    const saved = localStorage.getItem('savedTimeLeft');

    if (saved !== null) {
      this.savedTimeLeft = Number(saved);
    }

    if (resumeFlag === '1' && this.savedTimeLeft !== null) {
      // limpa flag e saved (opcional)
      localStorage.removeItem('resumeTimer');
      localStorage.removeItem('savedTimeLeft');

      this.isPaused = false;
      this.resumeTimer(); // retoma automaticamente
    }
  }

  finalizarProducao() {
    this.router.navigate(['/tela-inicial-operadores']);
  }

  // Abre detalhe da parada: pausa e navega
  DetalheParada() {
    this.pauseTimer(); // pausa e salva no localStorage
    this.router.navigate(['/detalhe-parada']);
  }

  // ---- timer ----
  startTimer(minutes: number): void {
    // se já estava pausado com savedTimeLeft, retomar a partir dele:
    if (this.isPaused && this.savedTimeLeft !== null) {
      this.timeLeft = this.savedTimeLeft;
      this.isPaused = false;
      this.savedTimeLeft = null;
    } else {
      this.timeLeft = minutes * 60;
    }

    // limpa qualquer flag de storage
    localStorage.removeItem('savedTimeLeft');
    localStorage.removeItem('resumeTimer');

    this.updateDisplay();

    // limpa interval anterior só por segurança
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateDisplay();
      } else {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.timerFormatted = null;
      }
    }, 1000);
  }

  pauseTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isPaused = true;
      this.savedTimeLeft = this.timeLeft;

      // salva no localStorage para a outra tela / reload
      localStorage.setItem('savedTimeLeft', String(this.savedTimeLeft));
      // Não setamos 'resumeTimer' aqui — será setado quando o usuário cancelar a parada.
    }
  }

  resumeTimer(): void {
    // se existe tempo salvo em memória (ou no localStorage), retoma
    const saved = this.savedTimeLeft ?? (localStorage.getItem('savedTimeLeft') ? Number(localStorage.getItem('savedTimeLeft')) : null);
    if (saved !== null) {
      this.timeLeft = saved;
      this.isPaused = false;
      this.savedTimeLeft = null;
      localStorage.removeItem('savedTimeLeft');

      // iniciar interval
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateDisplay();
        } else {
          clearInterval(this.intervalId);
          this.intervalId = null;
          this.timerFormatted = null;
        }
      }, 1000);
    }
  }

  private updateDisplay(): void {
    const m = Math.floor(this.timeLeft / 60);
    const s = this.timeLeft % 60;
    this.timerFormatted = `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
