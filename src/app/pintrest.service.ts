import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PintrestService {

  constructor(private _httpClient:HttpClient) { }
  getPintrest():Observable<any>{
    return this._httpClient.get("https://picsum.photos/v2/list?page=1&limit=100");
  }
}
