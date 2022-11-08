import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import {PatientRoutingModule} from './routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
@NgModule({
  declarations: [
    BookingComponent,
    DoctorsListComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class PatientsModule { }
