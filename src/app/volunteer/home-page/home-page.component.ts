import { AuthService } from './../../auth/auth.service';
import { User } from './../../auth/user.model';
import { Component, OnInit} from "@angular/core";

@Component ({
  selector: 'volunteer-home-page',
  templateUrl: './home-page.component.html',
  styleUrls:['./home-page.component.css']

})

export class HomePageComponent implements OnInit{
  user: User;
  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }
}
