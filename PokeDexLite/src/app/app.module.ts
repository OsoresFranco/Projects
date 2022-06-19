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
import { PokemonListComponent } from './features/pages/private/pokemon-list/pokemon-list.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { PokemonModalComponent } from './features/components/pokemon-modal/pokemon-modal.component';

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
    PokemonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
