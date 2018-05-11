import { environment } from './../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NpsService implements OnInit {

  
  constructor(private http: Http) {}
  
  ngOnInit() {
  }

  public getNotasNps(){  
    return this.http.get(environment.apiUrl + 'nps')
    .pipe(map((response: any) => response.json()));
  }

  public salvarNota(nota:number){
    let data = {'score': nota };

    return this.http.post(environment.apiUrl + 'nps', data)
      .pipe(map((response: any) => response.json()));
  }

  public salvarComentario(id:any, comentario:string){
    let data = {'id': id, 'comment': comentario };

    return this.http.post(environment.apiUrl + 'nps', data)
      .pipe(map((response: any) => response.json()));
  }

  // public salvar(nota: any): Observable<Nps> {
  //   return new Observable(observer => {

  //   });
  // }

}
