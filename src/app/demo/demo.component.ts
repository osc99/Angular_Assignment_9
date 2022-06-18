import { Component, OnInit } from '@angular/core';
import { ArithMaticService } from '../arith-matic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit 
{
public ans:number=0;
public ans1:number=0;
constructor(private _arithmatic:ArithMaticService)
  {

  }

  ngOnInit(){
    
    this.ans = this._arithmatic.add(11,10);
    this.ans1 = this._arithmatic.sub(11,10);
  }



}
