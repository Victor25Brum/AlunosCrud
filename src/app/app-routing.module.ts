import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'details/:id', component: DetailsComponent }, // Rota para detalhes com parâmetro id
  { path: '**', redirectTo: '/home' } // Página não encontrada redireciona para a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
