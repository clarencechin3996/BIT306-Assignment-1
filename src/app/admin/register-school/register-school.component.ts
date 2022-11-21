import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
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

export class RegisterSchoolComponent implements OnInit{
  user: User
  hide = true;
  constructor(public accService: AccService, public authService: AuthService, private snackBar: MatSnackBar){}
  ngOnInit() {
    this.user=this.authService.getUser();
  }
  

  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    this.accService.addSchool(form.value.schoolname, form.value.schooladdress, form.value.city);
    this.authService.createUser(form.value.email, form.value.password, form.value.fullName, form.value.phone, form.value.occupation, form.value.dob, form.value.staffID, form.value.position, form.value.schoolname, "School-Admin");
    this.snackBar.open("Created Successful", "OK", {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-primary']


     });
    form.resetForm();

}
}
