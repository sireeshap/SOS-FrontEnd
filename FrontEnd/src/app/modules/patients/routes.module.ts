import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingComponent} from './booking/booking.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

const routes: Routes = [
    {
      path: "booking",
      component : BookingComponent
    },
    {
      path:"booking/:id",
      component:DoctorsListComponent
    },
    { 
      path: "",
      redirectTo: 'booking', pathMatch: 'full'
    },
    { 
      path: "**",
      redirectTo: 'booking', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
