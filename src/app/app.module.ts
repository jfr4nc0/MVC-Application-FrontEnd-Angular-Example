import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JugadorService } from './service/jugador.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { JugadorListComponent } from './componentes/jugador-list/jugador-list.component';
import { JugadorDetalleComponent } from './componentes/jugador-detalle/jugador-detalle.component';
import { JugadorFormComponent } from './componentes/jugador-form/jugador-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorListComponent,
    JugadorFormComponent,
    JugadorDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [JugadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
