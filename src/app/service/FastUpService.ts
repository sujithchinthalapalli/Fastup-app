import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SearchResult } from '../Model/search';
import { Dashboard,DashboardResult } from '../Model/dashboard';




@Injectable()
export class FastUpService {
    constructor(private http: Http) { }


// private dashboardUrl = environment.API_URL + 'api';
private serachUrl ='https://yr8yphpbra.execute-api.us-east-1.amazonaws.com/prod/api';
    private dashboardUrl = 'https://yr8yphpbra.execute-api.us-east-1.amazonaws.com/prod/api';
debugger
     getdashboard(): Observable<DashboardResult[]> {
        return this.http.get(`${this.dashboardUrl}/${'templates'}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    getsearch(data:any): Observable<SearchResult[]>{
        debugger;
              return this.http.get(`${this.serachUrl}/${'search?q'}=${data}`)
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error||'Server Error'));
          }
          
          getdashboardId(id: any): Observable<DashboardResult[]> {
            debugger
       let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options = new RequestOptions({ headers: headers }); // Create a request option
       return this.http.get(`${this.dashboardUrl}/${'templates'}/${id}`, options)
           .map((res: Response) => res.json())
           .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
   }
   
}