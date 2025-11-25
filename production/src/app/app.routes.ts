import { Routes } from '@angular/router';
import {Login} from './componentes/login/login';
import { Cadastro } from './componentes/cadastro/cadastro';
import { TelaInicial } from './componentes/telaInicial/telaInicial';
import { TelaInicialEncarregados } from './componentes/tela-inicial-encarregados/tela-inicial-encarregados';
import { TelaInicialOperadores } from './componentes/tela-inicial-operadores/tela-inicial-operadores';
import { ProducaoIniciada } from './componentes/producao-iniciada/producao-iniciada';
import { DetalheParada } from './componentes/detalhe-parada/detalhe-parada';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'cadastro', component: Cadastro},
    {path: 'telaInicial', component: TelaInicial},
    {path: 'telaInicialEncaregados', component: TelaInicialEncarregados},
    {path: 'TelaInicialOperadores', component: TelaInicialOperadores},
    {path: 'ProducaoIniciada', component: ProducaoIniciada},
    {path: 'DetalheParada', component: DetalheParada}
];


