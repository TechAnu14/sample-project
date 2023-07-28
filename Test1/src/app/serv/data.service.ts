import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students=[
   {name:'anu'},
    {name:'priya'}, 
  {name:'sai'}
  ]

  constructor(private ht:HttpClient){ }
  getProduct()
  {
    return this.ht.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    })
    )
  }
}
