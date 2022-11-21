import { AccService } from './../../auth/account.service';
import { School } from './../../auth/school.modal';
import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { Component,OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';


@Component({
  selector:'school-help-admin-home',
  templateUrl:'./school-admin-homepage.component.html',
  styleUrls:['./school-admin-homepage.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(200)
    ]),
  ])
]
})

export class SchoolAdminHomepageComponent implements OnInit{
  school: School[]=[];

  user: User;
  private schoolSub: Subscription | undefined;

  hide = true;
  constructor(public authService: AuthService, public accService: AccService){}
  ngOnInit() {
    this.user=this.authService.getUser();

    this.accService.getSchool();
    this.schoolSub = this.accService.getSchoolUpdateListener().subscribe((school: School[])=>{
      this.school = school;
    })
  }
  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password);
    form.resetForm();

}

}
