import { Component,OnInit } from '@angular/core';
import { DataService } from '../serv/data.service';
import { CartService } from '../serv/cart.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  datval:any;
  showVideo=false;
  public productList:any;
  constructor(private api:CartService,private data:DataService)
  {
    // this.datval=this.api.students
    // console.log(this.api.students)
  }
  ngOnInit():void{
    this.data.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=> {
        Object.assign(a,{quantity:1,total:a.price})
      });
     }) 
 
  }
  
  productArray=[{prodID:1 ,img:"../../assets/img/d1.jpeg",des:"Knee short top Ethinic wear...Size free size max collection",amt:200,qnt:1},
  {prodID:2,  img:"../../assets/img/d2.jpg",des:"short front silt open party wear ...any size Ethinic wear",amt:200,qnt:1},
  {prodID:3, img:"../../assets/img/Black-Long-Sleeve-Midi-Dress.jpg",des:"Black pencil fit long wear maxy Wood anyuse limited size",amt:200,qnt:1}
];

inc(prod:any){
  if(prod.qnt!=5){
  prod.qnt=prod.qnt+1;
  // console.log(prod.qnt);
  }
}
dec(prod:any){
  if(prod.qnt!=1){
    prod.qnt-=1;  // console.log(prod);
  }
}
// addCart(category:any){
//   console.log(category);
// }


// item:any;
addtoCart(prod:any){
 this.api.addtoCart(prod);
}


  call:any;
  student=[
 { 'name':'pingo western','id':'$234'},
 {'name':'Ethinic dress','id':'$802'},
  {'name':'sai floral','id':'$303'},

  ]
  // sign()
  // {
  //   this.call=this.api.students;
  // }
}

