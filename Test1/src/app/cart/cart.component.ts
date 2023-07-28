import { Component,OnInit } from '@angular/core';
import { DataService } from '../serv/data.service';
import { Router } from '@angular/router';
import { CartService } from '../serv/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  datval:any;
  showVideo=false;
  public totalItem:number=1;
  constructor(private data:DataService,private rott:Router,private api:CartService)
  {
    // this.datval=this.data.students
    // console.log(this.data.students)
  }
  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
    this.totalItem=res.length;
    })
  }
  call:any;
  student=[
 { 'name':'pingo western','id':'$234'},
 {'name':'Ethinic dress','id':'$802'},
  {'name':'sai floral','id':'$303'},

  ]
  sign()
  {
    this.call=this.data.students;
  }
  
  serverSide()
{
this.rott.navigate(['L1'])
} 

}

