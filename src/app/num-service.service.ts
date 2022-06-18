import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumServiceService {

  constructor() { }
  list:number[]=[];  

  public addNum(num:number){  
    this.list.push(num);  
  }  
  
  public getList(){  
    return this.list;  
  }  
}
