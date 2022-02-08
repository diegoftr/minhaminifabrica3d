import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrcamentoComponent } from './solicitar-orcamento/solicitar-orcamento.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
},{
  path: 'orcamento',
  component: OrcamentoComponent,
},{
  path: 'login',
  component: LoginComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
