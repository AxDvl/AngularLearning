import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {log} from './../../mydecorator';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  @Output() count = new EventEmitter<number>();
  @Input() public startFrom:number=0;

  private _value:number=this.startFrom;
  public intID: any=null;

  public set value(val:number){
    this._value=val;
    this.count.emit(val);
  }

  public get value():number{
    return this._value;
  }


  onUpClick(){
    this.value++;
  }

  onDownClick(){
    this.value--;
  }

  onStartAutoCount(){
    if (this.intID===null)    
      this.intID = setInterval(()=>this.value++, 300);
  }

  @log
  onStopAutoCount(){
    if (this.intID){
      clearInterval(this.intID);
      this.intID=null;
      this.value=this.startFrom;
    }
  }

  ngOnInit(): void {
    this.value=this.startFrom;
  }

}
