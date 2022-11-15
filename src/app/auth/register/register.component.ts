import { AuthService } from './../auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component} from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
  selector:'app-account-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(200)
    ]),
  ])
]
})

export class RegisterComponent{

  hide = true;
  constructor(public authService: AuthService){}

  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    this.authService.createUser(form.value.email, form.value.password, form.value.fullName, form.value.phone, form.value.occupation, form.value.dob, form.value.staffID, form.value.position,form.value.schoolname, "Volunteer");
    form.resetForm();

}
}
