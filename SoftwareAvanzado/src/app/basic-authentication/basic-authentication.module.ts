import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAuthenticationRoutingModule } from './basic-authentication-routing.module';
import { BasicAuthenticationLayoutComponent } from './basic-authentication-layout/basic-authentication-layout.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCrudComponent } from './contact/contact-crud/contact-crud.component';


@NgModule({
  declarations: [BasicAuthenticationLayoutComponent, ContactComponent, ContactCrudComponent],
  imports: [
    CommonModule,
    BasicAuthenticationRoutingModule
  ]
})
export class BasicAuthenticationModule { }
