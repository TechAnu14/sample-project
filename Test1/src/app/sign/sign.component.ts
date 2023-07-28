import { Component,OnInit } from '@angular/core';
import { DataService } from '../serv/data.service';
import { CartService } from '../serv/cart.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  public product:any=[]
  public grandTotal:number=0;
  call:any;
constructor(private val:DataService,private cart:CartService)
{

}
ngOnInit():void{
  this.cart.getProducts()
  .subscribe(res=>{
    this.product=res;
  this.grandTotal=this.cart.getTotalPrice();
 
})
}
removeItem(item:any){
  if(confirm('Are you sure to delete'))
this.cart.removecartItem(item);
alert("item deleted successfully");  
}
emptycart()
{
  this.cart.removeAllCart();
}
sign()
{
  this.call=this.val.students;
}
}
