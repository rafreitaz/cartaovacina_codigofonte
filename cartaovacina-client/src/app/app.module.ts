import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {VacinaService} from "../vacina/vacina.service";
import {HttpClientModule} from "@angular/common/http";
import {VacinaModule} from "../vacina/vacina.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import {AppRoutingModule} from './app-routing.module';
import {MenuVacinaModule} from "../menu/menu-vacina.module";
import {ToastrModule} from "ngx-toastr";
import {UsuarioModule} from "../usuario/usuario.module";
import {ClinicaModule} from "../clinica/clinica.module";
import {AplicacaoModule} from "../aplicacao/aplicacao.module";
import {CartaoVacinaModule} from "../cartao-vacina/cartao-vacina.module";
import {LoginModule} from "../login/login.module";
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VacinaModule,
    UsuarioModule,
    ClinicaModule,
    AplicacaoModule,
    CartaoVacinaModule,
    LoginModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule,
    MenuVacinaModule,
    ToastrModule.forRoot(),
    BlockUIModule.forRoot()
  ],
  providers: [VacinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
