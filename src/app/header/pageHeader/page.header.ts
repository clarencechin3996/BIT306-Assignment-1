import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page.header.html',
  styleUrls: ['./page.header.css']
})
export class HeaderPageComponent implements OnInit{
  showFiller = false;
  user: User;
  constructor(private authService:AuthService){}
  ngOnInit() {
    this.user=this.authService.getUser();
  }

  onLogout(){
    this.authService.logout();
  }
}

