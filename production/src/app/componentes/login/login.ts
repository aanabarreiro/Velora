import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  codigoFuncionario: string = '';
  constructor (private router: Router){}
  
  
  cadastro(){
    this.router.navigate(['/cadastro'])
  } 

  entrar(){              
    const sufixo = this.codigoFuncionario.slice(-2);

    if (sufixo === '34') {
      
      // operador
      this.router.navigate(['/telaInicialOperadores']);
    
    } else if (sufixo === '56') {
      
      // encarregado
      this.router.navigate(['/telaInicialEncarregados']);
    
    } else if (sufixo === '78') {
      
      // tela inicial admin
      this.router.navigate(['/telaInicial']);
    
    } else {
      alert('Código inválido ou nível de acesso não reconhecido.');
    }
  }
}

