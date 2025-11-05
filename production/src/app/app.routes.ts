import { Routes } from '@angular/router';
import {Login} from './componentes/login/login';
import { Cadastro } from './componentes/cadastro/cadastro';
import { TelaInicial } from './componentes/telaInicial/telaInicial';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'cadastro', component: Cadastro},
    {path: 'telaInicial', component: TelaInicial}

];


