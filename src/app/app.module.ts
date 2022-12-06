import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorListComponent } from './jugador-list/jugador-list.component';
import { JugadorFormComponent } from './jugador-form/jugador-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JugadorService } from './service/jugador.service';

@NgModule({
  declarations: [
    AppComponent,
    JugadorListComponent,
    JugadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JugadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
