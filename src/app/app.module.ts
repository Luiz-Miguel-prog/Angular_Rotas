import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ErroComponent } from './erro/erro.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', component: ErroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    ContatosComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
