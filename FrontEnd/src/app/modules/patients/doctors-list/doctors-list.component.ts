import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { DataExchangeService } from '../../doctors/services/data-exchange.service';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
  assetPath:string=environment.ASSET_PATH;
  doctorsList:any=[];
  getSpecialization:any={};
  constructor(private router:ActivatedRoute, private APIService:APIService, private dataExchangeService:DataExchangeService) { 
    this.getSpecialization= this.dataExchangeService.getSpecialization().subscribe((info:any)=>{
      if(info){
        this.getDoctorsList(info)
      }
    });
  }

  ngOnInit(): void {

  let specializationName= this.router.snapshot.paramMap.get('id')
  let body={
    name:specializationName
  }
  this.APIService.getWithId('getSpecilizationId', body).subscribe((info:any)=>{
    this.doctorsList = info;
  });
  }
  getDoctorsList(obj:any) {
    this.APIService.getWithId('getDoctors', obj).subscribe((info: any) => {
          this.doctorsList = info;
    });
  }
}
