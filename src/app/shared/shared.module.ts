import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [FooterComponent,
    HeaderComponent,
  ],
  providers: [],
  exports: [FooterComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule],

})
export class SharedModule { }
