import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckNumberServiceService {

  constructor() { }

  checkForTripleDigits(input:string[]){

    
    let triplets: string[] = []

    input.forEach(x=>  {if(input.filter(y=> y==x).length >= 3 && !triplets.includes(x)){
      triplets.push(x)
      }
    }
    ) 
    

    let finalResult = triplets.sort((a:any, b:any) => b - a);

    return of(finalResult)

  }
}
