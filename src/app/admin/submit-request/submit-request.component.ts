import { School } from './../../auth/school.modal';
import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import { AccService } from 'src/app/auth/account.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector:'app-admin-submit-request',
  templateUrl:'./submit-request.component.html',
  styleUrls:['./submit-request.component.css']

})

export class SubmitRequestComponent implements OnInit{
  school: School[]=[];
  resourcetype:any;
  user: User;
  hide = true;
  private schoolSub: Subscription | undefined;

  constructor(public accService: AccService, public authService: AuthService, private snackBar: MatSnackBar){}
  ngOnInit() {
    this.accService.getSchool();
    this.schoolSub = this.accService.getSchoolUpdateListener().subscribe((school: School[])=>{
      this.school = school;
    })

    this.user=this.authService.getUser();

  }


    openFailureSnackBar(){
    this.snackBar.open("Invalid Login Credentials", "Try again!", {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-warn']
     });
     }

    onAddTutorialRequest(form:NgForm){
      if(form.invalid){
        return;
      }
      this.user = this.authService.getUser();
      var today = new Date();
      this.accService.AddRequest(form.value.description, form.value.datetime, form.value.studentlevel, form.value.numofexpectedstudents, form.value.status='NEW', form.value.school_name=this.user.schoolname, form.value.city,form.value.resourcedescription, form.value.resourcetype, form.value.resourcenum, form.value.requesttype='tutorial',form.value.requestdate=today,form.value.remarks="-", form.value.volunteerUsername="-");
      this.snackBar.open("Request Added Successful", "OK", {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-primary']


       });
      form.resetForm();
      }
    onAddResourceRequest(form:NgForm){
        if(form.invalid){
          return;
        }
        var today = new Date();
        this.accService.AddRequest(form.value.description, form.value.datetime, form.value.studentlevel, form.value.numofexpectedstudents, form.value.status='NEW', form.value.school_name=this.user.schoolname, form.value.city,form.value.resourcedescription, form.value.resourcetype, form.value.resourcenum, form.value.requesttype='resource',form.value.requestdate=today,form.value.remarks="-", form.value.volunteerUsername="-");
        this.snackBar.open("Request Added Successful", "OK", {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-primary']


         });
        form.resetForm();
        }

}

