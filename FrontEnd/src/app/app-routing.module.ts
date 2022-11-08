import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: "Appointment",
      loadChildren : () => import('./modules/patients/patients.module').then((m) => m.PatientsModule)
    },
    {
      path: "doctors",
      loadChildren : () => import('./modules/doctors/doctors.module').then((m) => m.DoctorsModule)
    },
    { 
      path: "",
      redirectTo: 'Appointment', pathMatch: 'full'
    },
    { 
      path: "**",
      redirectTo: 'Appointment', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
