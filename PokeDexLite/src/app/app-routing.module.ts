import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './features/pages/private/pokemon-list/pokemon-list.component';
import { LoginComponent } from './features/pages/public/login/login.component';

const routes: Routes = [
  { path:  'login', component:  LoginComponent},
  { path:  'home', component:  PokemonListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
