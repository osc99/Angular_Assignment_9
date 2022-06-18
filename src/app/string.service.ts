import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(n:string)
  {
    var u:number=0;
    var n1:number = n.length;
    for(var i:number=0;i<n1;i++)
    {
      if (n[i] >= "A" && n[i] <= "Z") u++;
    }
    return u;
  }
}
