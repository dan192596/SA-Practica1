import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenBearerRoutingModule } from './token-bearer-routing.module';
import { TokenBearerLayoutComponent } from './token-bearer-layout/token-bearer-layout.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCrudComponent } from './contact/contact-crud/contact-crud.component';


@NgModule({
  declarations: [TokenBearerLayoutComponent, ContactComponent, ContactCrudComponent],
  imports: [
    CommonModule,
    TokenBearerRoutingModule
  ]
})
export class TokenBearerModule { }
