import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public checkPrime(n:number)
  {
    var f=0;
    if(n>1)
    {
      for(var i = 2; i < n; i++)
      {
        if(n % i === 0) 
        {
          f=0;;
        }
        else
        {
          f=1;
        }
      }
      if(f==1)
      {
        return true;
      }
      return false;
    }
    return false;
  }
}