import { Routes } from '@angular/router';
import {Login} from './componentes/login/login';
import { Cadastro } from './componentes/cadastro/cadastro';
import { TelaInicial } from './componentes/telaInicial/telaInicial';
import { TelaInicialEncarregados } from './componentes/tela-inicial-encarregados/tela-inicial-encarregados';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'cadastro', component: Cadastro},
    {path: 'telaInicial', component: TelaInicial},
    {path: 'telaInicialEncaregados', component: TelaInicialEncarregados}
];


