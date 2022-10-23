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

  resourcetype:any;

  hide = true;
  constructor(public accService: AccService){}


    onAddTutorialRequest(form:NgForm){
      if(form.invalid){
        return;
      }

      this.accService.AddRequest(form.value.description, form.value.datetime, form.value.studentlevel, form.value.numofexpectedstudents, form.value.status='NEW', form.value.school_name='SJK Henu', form.value.city='Kajang',form.value.resourcedescription, form.value.resourcetype, form.value.resourcenum, form.value.requesttype='tutorial',form.value.requestdate,form.value.remarks, form.value.volunteerUsername='ben');
      form.resetForm();
      }
      onAddResourceRequest(form:NgForm){
        if(form.invalid){
          return;
        }

        this.accService.AddRequest(form.value.description, form.value.datetime, form.value.studentlevel, form.value.numofexpectedstudents, form.value.status='NEW', form.value.school_name='SJK Henu', form.value.city='Kajang',form.value.resourcedescription, form.value.resourcetype, form.value.resourcenum, form.value.requesttype='resource',form.value.requestdate,form.value.remarks, form.value.volunteerUsername='ben');
        form.resetForm();
        }
}
