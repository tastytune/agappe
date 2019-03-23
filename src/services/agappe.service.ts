import { Injectable } from '@angular/core';
import { Agappes } from '../models/agappes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AgappeService {
  constructor(private http: HttpClient) {}

  /* agappesUrl = '../assets/agappes.json'; A json-server --watch agappes.json no le gusta la etrucura en array*/

  agappesUrl = 'https://jsonplaceholder.typicode.com/users';
  agappespost: Observable<any>;
  agappePost: Agappes[];

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  getAgappes(): Observable<Agappes[]> {
    return this.http.get<Agappes[]>(this.agappesUrl);
  }
/*   getJSONplacegolder(): Observable<Agappes[]> {
    return this.http.get<Agappes[]>('https://api.github.com/users/seeschweiler');
  }*/
  postAgappes(agappespost: Agappes[]): Observable<Agappes[]> {
    console.log(this.httpOptions);
    console.log(this);
    return this.http.post<Agappes[]>(this.agappesUrl, agappespost, this.httpOptions)
    .pipe(
           catchError(this.handleError)
    );
  }
  /*
  postCopon(): Observable<Agappes[]> {
     return this.http.post<Agappes[]>(this.agappesUrl, this.agappespost);

  }
*/


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
