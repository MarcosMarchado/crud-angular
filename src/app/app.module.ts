import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import localePt from '@angular/common/locales/pt';
import { CustomCurrencyMaskConfig } from './utils/CurrencyMaskConfig';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    CommonModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    },
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
