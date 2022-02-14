import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcabamentoComponent } from './acabamento/acabamento.component';
import { AppComponent } from './app.component';
import { CorComponent } from './cor/cor.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { MeusOrcamentosComponent } from './meus-orcamentos/meus-orcamentos.component';
import { OrcamentoComponent } from './solicitar-orcamento/solicitar-orcamento.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
},{
  path: 'orcamento',
  component: OrcamentoComponent,
},{
  path: 'login',
  component: LoginComponent,
},{
  path: 'acabamento',
  component: AcabamentoComponent,
},{
  path: 'app',
  component: AppComponent,
},{
  path: 'material',
  component: MaterialComponent,
},{
  path: 'tecnologia',
  component: TecnologiaComponent,
},{
  path: 'cor',
  component: CorComponent,
},{
  path: 'meusOrcamentos',
  component: MeusOrcamentosComponent,
},{
  path: 'estatisticas',
  component: EstatisticasComponent,
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
