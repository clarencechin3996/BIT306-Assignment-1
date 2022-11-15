import { AuthService } from './../../auth/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component} from '@angular/core';
import { AccService } from 'src/app/auth/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector:'app-admin-register-school',
  templateUrl:'./register-school.component.html',
  styleUrls:['./register-school.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(200)
    ]),
  ])
]
})

export class RegisterSchoolComponent{

  hide = true;
  constructor(public accService: AccService, public authService: AuthService){}

  onAddSchool(form:NgForm){
    if(form.invalid){
      return;
    }
    this.accService.addSchool(form.value.schoolname, form.value.schooladdress, form.value.city);
    form.resetForm();}

    onAddSchoolAdmin(form:NgForm){
      if(form.invalid){
        return;
      }

      this.authService.createUser(form.value.email, form.value.password, form.value.fullName, form.value.phone, form.value.occupation, form.value.dob, form.value.staffID, form.value.position,form.value.schoolname, "SchoolAdmin");
      form.resetForm();


}
}
