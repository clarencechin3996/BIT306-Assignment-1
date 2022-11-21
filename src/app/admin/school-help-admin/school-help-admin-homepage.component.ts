import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector:'school-admin-home',
  templateUrl:'./school-help-admin-homepage.component.html',
  styleUrls:['./school-help-admin-homepage.component.css'],
  animations:[trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter, :leave',[ // void <=> *
      animate(200)
    ]),
  ])
]
})

export class SchoolHelpAdminHomepageComponent implements OnInit{
  user: User;

  hide = true;
  constructor(public authService: AuthService){}
  ngOnInit() {
    this.user=this.authService.getUser();
  }
  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password);
    form.resetForm();

}

}
