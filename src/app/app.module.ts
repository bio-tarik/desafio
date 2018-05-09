import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarraNpsComponent } from './ui/barra-nps/barra-nps.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraNpsComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
