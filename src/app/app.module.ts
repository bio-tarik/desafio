import { ModalService } from './services/modal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarraNpsComponent } from './ui/barra-nps/barra-nps.component';
import { NpsService } from './services/nps.service';
import { HttpModule } from '@angular/http';
import { NotaComponent } from './ui/barra-nps/nota/nota.component';
import { MatDialogModule } from '@angular/material';
import { ComentarioComponent } from './ui/modal/comentario/comentario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgradecimentoComponent } from './ui/modal/agradecimento/agradecimento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraNpsComponent,
    NotaComponent,
    ComentarioComponent,
    AgradecimentoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    ComentarioComponent,
    AgradecimentoComponent
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
