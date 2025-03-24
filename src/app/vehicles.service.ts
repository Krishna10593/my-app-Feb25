import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _httpClient:HttpClient) {}
  getVehicles():Observable<any>{
      return this._httpClient.get("baseUrl");
    }

    getFilteredVehicles(term:any):Observable<any>{
      return this._httpClient.get(this.baseUrl+"?filter="+term);
    }

    getSortedVehicles(column:any,order:any):Observable<any>{
      return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
    }

    deleteVehicles(id:any):Observable<any>{
      return this._httpClient.delete(this.baseUrl+"/"+id);
    }

    getPaginatedVehicles(limit:any,page:any):Observable<any>{
      return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
    }

    createVehicle(data:any):Observable<any>{
      return this._httpClient.post(this.baseUrl, data)
    }

    getVehicle(id:any):Observable<any>{
      return this._httpClient.get(this.baseUrl+"/"+id);
    }

    updateVehicle(id:any,data:any):Observable<any>{
      return this._httpClient.put(this.baseUrl+"/"+id,data);
    }

}
