import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login {
constructor (private router: Router){}
  
  cadastro(){
    this.router.navigate(['/cadastro'])
  }  

  codigoFuncionario: string = '';
  senha: string = '';


  entrar() {              
  const codigo = String(this.codigoFuncionario).trim();
  // const senha = String(this.senha)
  const sufixo = codigo.slice(-2);

  if (sufixo === '34' && this.senha === '1234') {
    this.router.navigate(['/tela-inicial-operadores']);

  } else if (sufixo === '56' && this.senha === '3456') {
    this.router.navigate(['/tela-inicial-encarregados']);

  } else if (sufixo === '78' && this.senha === '5678') {
    this.router.navigate(['/telaInicial']);
    
  } else {
    alert('Código inválido ou nível de acesso não reconhecido.');
  }
}
  
}

