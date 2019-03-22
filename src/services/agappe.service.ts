import { Injectable } from '@angular/core';
import { Agappes } from '../models/agappes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AgappeService {
  constructor(private agappes: HttpClient) {}

  agappesUrl = '../assets/agappes.json';

  getAgappes(): Observable<Agappes[]> {
    return this.agappes.get<Agappes[]>(this.agappesUrl);
  }


}
