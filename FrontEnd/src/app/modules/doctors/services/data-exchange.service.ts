import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataExchangeService {
  public Specialization = new BehaviorSubject<any>(undefined);
  constructor() {}
  setSpecialization(value: string) {
    this.Specialization.next(value);
  }
  getSpecialization() {
    return this.Specialization.asObservable();
  }
}
