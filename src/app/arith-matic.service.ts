import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithMaticService {

  constructor() { }

  add(n1:number,n2:number)
  {
    return n1+n2;
  }
  sub(n1:number,n2:number)
  {
    return n1-n2;
  }
  
}
