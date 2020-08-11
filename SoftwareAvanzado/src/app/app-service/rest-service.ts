import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestManagerService {

  constructor(private http: HttpClient) { }

  public getWithParams(rest: string, controller: string, method: string, values: Map<string, string>) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+ sessionStorage.getItem('token')
    });

    let params = '';
    values.forEach((value: string, key: string) => {
      if (value !== '' && value !== null) {
        params = params + key + '=' + value + '&';
      }
    });
    return this.http.get(rest + controller + (method !== '' ? '/' : '') + method + (params !== '' ? '?' : '/') + params,{headers:headers});
  }

  public insertObject(rest: string, controller: string, object: any, values: Map<string, string>) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+ sessionStorage.getItem('token')
    });
    let params = '';
    values.forEach((value: string, key: string) => {
      if (value !== '' && value !== null) {
        params = params + key + '=' + value + '&';
      }
    });
    console.log(rest + controller + (params !== '' ? '?' : '/') + params)
    console.log(JSON.stringify(object))
    console.log(headers)
    return this.http.post(rest + controller + (params !== '' ? '?' : '/') + params, JSON.stringify(object),{headers:headers});
  }

  public getToken(rest: string, controller: string, object: any, values: Map<string, string>) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    });
    let params = '';
    values.forEach((value: string, key: string) => {
      if (value !== '' && value !== null) {
        params = params + key + '=' + value + '&';
      }
    });
    params = params.substring(0,params.length-1)
    console.log(rest + controller + (params !== '' ? '?' : '/') + params)
    console.log(JSON.stringify(object))
    console.log(headers)
    return this.http.post(rest + controller + (params !== '' ? '?' : '/') + params, JSON.stringify(object), {headers:headers});
  }
}