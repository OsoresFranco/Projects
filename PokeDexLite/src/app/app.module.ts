import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { NavBarComponent } from './features/components/nav-bar/nav-bar.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { LoginComponent } from './features/pages/public/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './features/components/login-form/login-form.component';
import { CardComponent } from './features/components/card/card.component';
import { TypePipe } from './pipes/type.pipe';
import { PokemonListComponent } from './features/components/pokemon-list/pokemon-list.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { PokemonModalComponent } from './features/components/pokemon-modal/pokemon-modal.component';
import { PokemonEditFormComponent } from './features/components/pokemon-edit-form/pokemon-edit-form.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { pokemonsReducer } from './state/reducers/pokemon.reducers';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './state/effects/pokemon.effects';
import { AddPokemonComponent } from './features/components/add-pokemon/add-pokemon.component';
import { CreationFormComponent } from './features/components/creation-form/creation-form.component';
import { HomeComponent } from './features/pages/private/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    CardComponent,
    TypePipe,
    PokemonListComponent,
    PaginatePipe,
    PokemonModalComponent,
    PokemonEditFormComponent,
    AddPokemonComponent,
    CreationFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST'}),
    EffectsModule.forRoot([PokemonsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
