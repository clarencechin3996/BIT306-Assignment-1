import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component} from '@angular/core';
import { AccService } from 'src/app/account/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector:'app-admin-submit-request',
  templateUrl:'./submit-request.component.html',
  styleUrls:['./submit-request.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(100)
    ]),
  ])
]
})

export class SubmitRequestComponent{

  hide = true;
  constructor(public accService: AccService){}


    onAddRequest(form:NgForm){
      if(form.invalid){
        return;
      }

      this.accService.AddRequest(form.value.description, form.value.datetime, form.value.studentlevel, form.value.numofexpectedstudents);
      form.resetForm();
  


      }
      

}
