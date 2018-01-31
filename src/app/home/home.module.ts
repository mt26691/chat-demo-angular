import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting, appRoutingProviders } from './home.routing';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './home-container.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    SharedModule,
    MyDatePickerModule
  ],
  declarations: [
    HomeContainerComponent,
    HomeComponent
  ],
  providers: [
    appRoutingProviders
  ],
  exports: [RouterModule],

})
export class HomeModule { }
