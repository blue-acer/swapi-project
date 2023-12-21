import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  constructor(private http : HttpClient) { }

  getList():Observable<any>{
    return this.http.get("https://localhost:4000/api/list")
  }
}
