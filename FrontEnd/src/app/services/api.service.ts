import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  remotePath:string=environment.API_URL+ '/sos/'
  END_POINTS:any={
    'getSpecializations':'specializations',
    'getDoctors':'getDoctors',
    'registerDoctor':'registerDoctor',
    'getSpecilizationId':'getSpecilizationId'
  }

  constructor(private http:HttpClient) { }

  GET(endPoint: string) {
    return this.http.get<any>(this.remotePath + this.END_POINTS[endPoint]).pipe(
      take(1),

      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }
  POST(endPoint: string, BODY:any) {
    return this.http
      .post(this.remotePath + this.END_POINTS[endPoint], BODY)
      .pipe(
        take(1),

        map((response: any) => {
          return response;
        }),
        catchError((error) => {
          return of(error);
        })
      );
  }
  getWithId(endPoint:string, body:any){
    return this.http.post<any>(this.remotePath + this.END_POINTS[endPoint], body).pipe(
      take(1),

      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }
}
