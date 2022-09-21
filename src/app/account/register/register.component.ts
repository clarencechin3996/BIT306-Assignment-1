import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component} from '@angular/core'
import { AccService } from '../account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector:'app-account-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(100)
    ]),
  ])
]
})

export class RegisterComponent{

  hide = true;
  constructor(public accService: AccService){}

  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    this.accService.addAcc(form.value.username, form.value.password, form.value.fullName, form.value.email, form.value.phone, form.value.occupation, form.value.dob);
    form.resetForm();

}
}
