import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnloggedRoutingModule } from './unlogged-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table' 
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ContactCrudComponent } from './contact/contact-crud/contact-crud.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactCrudComponent
  ],
  imports: [
    CommonModule,
    UnloggedRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class UnloggedModule { }
