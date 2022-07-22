import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarRamalComponent } from './cadastrar-ramal/cadastrar-ramal.component';
import { RamalEditComponent } from './ramal-edit/ramal-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'configurar-ramal', component: CadastrarRamalComponent },
  {path: 'ramal-edit',component: RamalEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
