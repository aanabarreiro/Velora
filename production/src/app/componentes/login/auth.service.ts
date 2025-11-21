import { Injectable } from '@angular/core';

interface Usuario {
  codigoFuncionario: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'usuarios';

  constructor() {}

  cadastrar(codigoFuncionario: string, senha: string): boolean {
    let usuarios: Usuario[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    // Verifica se já existe
    if (usuarios.some(u => u.codigoFuncionario === codigoFuncionario)) {
      return false;
    }

    usuarios.push({ codigoFuncionario, senha });
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
    return true;
  }

  entrar(codigoFuncionario: string, senha: string): boolean {
    const usuarios: Usuario[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    return usuarios.some(
      u => u.codigoFuncionario === codigoFuncionario && u.senha === senha
    );
  }
}
