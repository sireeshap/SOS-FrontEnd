import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:any=new FormGroup({});
  specializations:any=[];
  slotsCount:any=[]
  constructor(private APIService:APIService) { }

  ngOnInit(): void {
    let i=1;
    while(i<=20){
      this.slotsCount.push(i++)
    }
    this.slotsCount
    this.getSpecilaizations();
    this.registerForm= new FormGroup({
      name:new FormControl('',Validators.required),
      specialization: new FormControl('', Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
      slotCount: new FormControl(1, Validators.required),
      available: new FormControl(true, Validators.required)
    })
  }
  getSpecilaizations() {
    this.APIService.GET('getSpecializations').subscribe((info: any) => {
   this.specializations = info;
    });
  }
  onRegister(form:FormGroup){
    if(form.valid){
      let body= form.value
        this.APIService.POST('registerDoctor', body).subscribe((info:any)=>{
            if(info.status==200){
              alert('success')
            }
        });
    }
  }
}
