import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import{ FormsModule} from '@angular/forms'

@Component({
  selector: 'app-loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.css']
})
export class LogincComponent {
  @Input('show')
 show=true;
 @Output('close')
 onClose=new EventEmitter()
 openpopup()
 {
  this.show=true;
 }
 closepopup()
 {
  this.show=false;
 }
 closeoverlay(e:any)
 {
  if(e.target.classList.contains('overlay'))
  {
    this.show=false;
  }
 }
} 
