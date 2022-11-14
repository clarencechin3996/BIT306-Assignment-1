import { AuthService } from './../auth.service';
import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector:'app-account-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(200)
    ]),
  ])
]
})

export class LoginComponent{

  hide = true;
  constructor(public authService: AuthService){}

  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password);
    form.resetForm();

}

}
