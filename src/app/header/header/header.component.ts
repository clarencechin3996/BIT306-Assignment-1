import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'just-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']

})
export class JustHeaderComponent implements OnInit{

  user: User;
  constructor(private authService:AuthService){}
  ngOnInit() {
    this.user=this.authService.getUser();
  }
  onLogout(){
    this.authService.logout();
  }
}
