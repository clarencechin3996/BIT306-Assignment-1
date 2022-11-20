import { User } from './user.model';
import { School } from './school.modal';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core'; //Get the post model


import { Request } from '../request.modal';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export class AccService{ //Create a account class

  private user:User[]=[]; //Set type to Account array(model) and assign to empty array
  private school:School[]=[]; //Set type to School array(model) and assign to empty array
  private request:Request[]=[]; //Set type to Requesy array(model) and assign to empty array

  private requestsUpdated = new Subject<Request[]>();
  private schoolsUpdated = new Subject<School[]>();
  private userUpdated = new Subject<User[]>();

  constructor(private http: HttpClient){}

  //to retrieve the post
  getUser(){
    this.http.get<{message: string, user: any}>('http://localhost:3000/api/user')
    .pipe(map((userData)=>{
      return userData.user.map(user =>{
        return{
          email: user.email,
          password: user.password,
          fullName: user.fullName,
          phone: user.phone,
          occupation: user.occupation,
          dob: user.dob,
          staffID: user.staffID,
          position: user.position,
          role: user.role
        };
      });
    }))
    .subscribe((transformedUser)=>{
      this.user = transformedUser;
      this.userUpdated.next([...this.user]);
    })// creating new array by copying the old array
  }

  getUserUpdateListener(){
    return this.userUpdated.asObservable();
  }


  getSchool(){
    this.http.get<{message: string, schools: any}>('http://localhost:3000/api/schools')
    .pipe(map((schoolData)=>{
      return schoolData.schools.map(school =>{
        return{
          schoolname: school.schoolname,
          schooladdress: school.schooladdress,
          city: school.city,
          schoolId: school._id
        };
      });
    }))
    .subscribe((transformedSchool)=>{
      this.school = transformedSchool;
      this.schoolsUpdated.next([...this.school]);
    })// creating new array by copying the old array
  }

  getSchoolUpdateListener(){
    return this.schoolsUpdated.asObservable();
  }

  addSchool(schoolname: string, schooladdress: string, city: string){ // method to add account with arguments
    const school: School = {schoolId: null as any, schoolname: schoolname, schooladdress: schooladdress, city:city}
    this.http
    .post<{message: string}>('http://localhost:3000/api/schools',school)
    .subscribe((responsedata)=>{
      this.school.push(school);
      this.schoolsUpdated.next([...this.school]);
    })
  }



  getRequest(){
    this.http.get<{message: string, requests: any}>('http://localhost:3000/api/requests')
    .pipe(map((requestData)=> {
      return requestData.requests.map(request =>{
        return{
          description: request.description,
          datetime: request.datetime,
          studentlevel: request.studentlevel,
          numofexpectedstudents: request.numofexpectedstudents,
          status: request.status,
          school_name: request.school_name,
          city: request.city,
          resourcedescription: request.resourcedescription,
          resourcetype: request.resourcetype,
          resourcenum: request.resourcenum,
          requesttype: request.requesttype,
          requestdate: request.requestdate,
          remarks: request.remarks,
          volunteerUsername: request.volunteerUsername,
          requestId: request._id
        };
      });
    }))
    .subscribe((transformedRequests)=>{
      this.request = transformedRequests;
      this.requestsUpdated.next([...this.request]);
    })
    //return this.request;
  }

  getRequestUpdateListener(){
    return this.requestsUpdated.asObservable();
  }

  AddRequest( description: string,datetime: Date, studentlevel: string, numofexpectedstudents: string, status: string, school_name: string, city: string, resourcedescription: string, resourcetype: string, resourcenum: string, requesttype: string,requestdate: Date, remarks: string, volunteerUsername: string){ // method to add account with arguments
    const request: Request = {requestId: null as any, description: description, datetime: datetime, studentlevel: studentlevel, numofexpectedstudents: numofexpectedstudents, status: status, school_name: school_name, city: city, resourcedescription:resourcedescription, resourcetype:resourcetype, resourcenum:resourcenum,  requesttype:requesttype,requestdate:requestdate, remarks:remarks, volunteerUsername: volunteerUsername}; // variable storing values of account
    this.http
    .post<{message:string}>('http://localhost:3000/api/requests', request)
    .subscribe((responseData)=>{
    this.request.push(request); // push the nre post into account array
    this.requestsUpdated.next([...this.request]);
    });
  }
}
