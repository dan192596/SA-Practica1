import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table' 
import { AppComponent } from './app.component';
import { LayoutComponent } from './unlogged/layout/layout.component';
import { BasicAuthenticationLayoutComponent} from './basic-authentication/basic-authentication-layout/basic-authentication-layout.component'
import { TokenBearerLayoutComponent } from './token-bearer/token-bearer-layout/token-bearer-layout.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BasicAuthenticationLayoutComponent,
    TokenBearerLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
