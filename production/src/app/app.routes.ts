import { Routes } from '@angular/router';
import {Login} from './componentes/login/login';
import { Cadastro } from './componentes/cadastro/cadastro';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'cadastro', component: Cadastro}

];


