import { User } from './user.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./auth-data.model";
import { BehaviorSubject, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable
 ({providedIn: 'root'})
 export class AuthService{
  private token:string;
  users : User;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router){}
  authdata: AuthData;
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  getToken(){
    return this.token;
  }

  login_user(form: string) {
    // Call this._isLoggedIn.next(true) or this._isLoggedIn.next(false) depending on the result
}

get isLoggedIn() {
  return this._isLoggedIn.asObservable();
}

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getUser(){
    return this.users;
  }


  login(email: string, password: string){
    const authData: AuthData = {
      email: email, password: password, fullName:"", phone:"", occupation:"", dob:"", staffID:"", position:"",schoolname:"", role:""
    };
    this.http.post<{token:string, loginUserRole:string, loginUser: User}>('http://localhost:3000/api/user/login',authData)
    .subscribe(response=>{
      console.log(response.loginUserRole);
      const token = response.token;
      this.token = token;
      this.authStatusListener.next(true);
      if(response.loginUserRole=="Volunteer"){
        this.users = response.loginUser;
        this.router.navigate(['/volunteer-home-page']);
        console.log(true);
        console.log(this.getUser());
      }else if(response.loginUserRole=="School-Admin"){
        this.users = response.loginUser;
        this.router.navigate(['/submit-request']);
        console.log(true);
        console.log(this.getUser());
      }else{
        this.users = response.loginUser;
        this.router.navigate(['/register-school']);
        console.log(true);
        console.log(this.getUser());
      }
    })
  }



  logout(){
    this.token=null;
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }

  createUser(email:string,password:string, fullName:string, phone:string, occupation:string, dob:string, staffID:string, position:string,schoolname:string, role:string){
    const authData: AuthData = {email:email, password:password, fullName:fullName, phone:phone,occupation:occupation, dob:dob, staffID:staffID, position:position,schoolname:schoolname, role:role};
    this.http.post('http://localhost:3000/api/user/signup',authData)
    .subscribe(response=>{
      console.log(response);
      this.router.navigate(['/login']);

    })
  }
 }
