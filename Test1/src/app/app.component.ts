import { Component, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Test1';
  ngiif=true
  isValid: boolean = true;
ChangeData(valid: boolean) 
{
this.isValid = valid;
}
template(g1:NgForm)
{
  let u1=g1.controls['u1'],value;
  {
    if(u1==undefined)
    {
alert('please enter the value')
return
    }
  }
  console.log(g1.value)
}


}
