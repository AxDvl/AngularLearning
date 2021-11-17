import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  public counterLog: number[]=[];

  @ViewChild(CounterComponent) counter!:CounterComponent;

  onCounterChanged(value: number):void{
    this.counterLog.push(value);
  }

  reset():void{
    this.counterLog=[];
    this.counter.onStopAutoCount();
  }

  ngOnInit(): void {
  }

}
