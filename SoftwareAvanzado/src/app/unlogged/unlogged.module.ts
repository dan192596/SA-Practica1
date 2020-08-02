import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnloggedRoutingModule } from './unlogged-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table' 
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ContactCrudComponent } from './contact/contact-crud/contact-crud.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UnloggedModule { }
