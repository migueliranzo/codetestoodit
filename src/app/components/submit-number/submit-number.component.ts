import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CheckNumberServiceService } from 'src/app/common/services/check-number-service.service';

@Component({
  selector: 'app-submit-number',
  templateUrl: './submit-number.component.html',
  styleUrls: ['./submit-number.component.scss']
})
export class SubmitNumberComponent implements OnInit {

  result$: Observable<string[]> | undefined;

  constructor(public checkService: CheckNumberServiceService) { }

  numberFormControl = new FormControl('', [Validators.required, this.formatMatch()]);

  ngOnInit(): void {
  }

  submitNumber(){ 
    this.result$ = this.checkService.checkForTripleDigits( this.inputToArray(this.numberFormControl.value as string))
  }

  formatMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let format = control.value;
      
      if(format[0] == "[" && format[format.length-1] == "]" ){

      let arrayOfInputs = this.inputToArray(format)

        if( arrayOfInputs.filter((x:string)=> isNaN(Number(x))  || isNaN(parseInt(x)) ).length >= 1 ){
  
          return {formatMatch: {value: control.value}};
          
        }else{
          return null;
        }
      }else{
        return {formatMatch: {value: control.value}};
      }

    };
  }

  inputToArray(input:string){
    let rawContent = input.replace(input[0], "")
    rawContent = rawContent.replace(rawContent[rawContent.length-1], "")
    
    let arrayOfInputs = rawContent.split(",");
    return arrayOfInputs;
  }

}
