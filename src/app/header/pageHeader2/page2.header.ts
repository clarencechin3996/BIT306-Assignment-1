import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'page2-header',
  templateUrl: './page2.header.html',
  styleUrls:['./page2.header.css']

})
export class HeaderPage2Component implements OnInit{

  user: User;
  constructor(private authService:AuthService){}


  ngOnInit() {
    this.user=this.authService.getUser();
  }
  onLogout(){
    this.authService.logout();
  }
}
