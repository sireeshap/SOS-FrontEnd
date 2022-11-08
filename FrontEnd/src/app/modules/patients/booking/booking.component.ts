import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { DataExchangeService } from '../../doctors/services/data-exchange.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  searchForm: any = new FormGroup({});
  constructor(private apiService: APIService, private router:Router, private dataExchangeService:DataExchangeService) {}
  specializations:any=[];
  ngOnInit(): void {
    this.getSpecilaizations();
    this.searchForm = new FormGroup({
      specialization: new FormControl(),
    });
  }

  getSpecilaizations() {
    this.apiService.GET('getSpecializations').subscribe((info: any) => {
   this.specializations = info;
    });
  }
  getDoctorsList(specialization:MatSelectChange){
    this.router.navigate(['Appointment/booking/',specialization.value.name]);
    this.dataExchangeService.setSpecialization(specialization.value);
  }
  
}
