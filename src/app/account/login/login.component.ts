import { Component } from '@angular/core'
import { AccService } from '../account.service';
import { NgForm } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector:'app-account-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(100)
    ]),
  ])
]
})

export class LoginComponent{

  hide = true;
  constructor(public accService: AccService){}

  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    form.resetForm();

}

}
