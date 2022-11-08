import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
      path: 'register',
      component : RegisterComponent
    },
    { 
      path: "",
      redirectTo: 'register', pathMatch: 'full'
    },
    { 
      path: "**",
      redirectTo: 'register', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
