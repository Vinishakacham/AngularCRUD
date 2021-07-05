import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import{map} from 'rxjs/operators'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
postItems(data : any){
  return this.http.post<any>("http://localhost:3000/post",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
getItem(){
  return this.http.get<any>("http://localhost:3000/post")
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteItem(){
  return this.http.delete<any>("http://localhost:3000/post")
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
