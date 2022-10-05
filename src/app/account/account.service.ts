import { Injectable } from '@angular/core'; //Get the post model
import { Account } from './account.model';
import { SchoolAdmin } from './school-admin.modal';
import { SchoolHelpAdmin } from './school-help-admin.modal';
import { School } from './school.modal';
import { Request } from './request.modal';

@Injectable({providedIn: 'root'})

export class AccService{ //Create a account class
  private account:Account[]=[]; //Set type to Account array(model) and assign to empty array
  private schoolAdmin:SchoolAdmin[]=[]; //Set type to SchoolAdmin array(model) and assign to empty array
  private schoolHelpAdmin:SchoolHelpAdmin[]=[]; //Set type to SchoolHelpAdmin array(model) and assign to empty array
  private school:School[]=[]; //Set type to School array(model) and assign to empty array
  private request:Request[]=[]; //Set type to Requesy array(model) and assign to empty array


  //to retrieve the post
  getAcc(){
    return this.account; // creating new array by copying the old array
  }

  addAcc(username: string,password: string, fullName: string, email: string, phone: string, occupation: string, dob: string){ // method to add account with arguments
    const account: Account = {username: username, password: password, fullName: fullName, email: email, phone: phone, occupation: occupation, dob: dob}; // variable storing values of account
    this.account.push(account); // push the new post into account array
  }


  getSchool(){
    return this.school; // creating new array by copying the old array
  }

  addSchool(schoolname: string, schooladdress: string, city: string){ // method to add account with arguments
    const school: School = {schoolname: schoolname, schooladdress: schooladdress, city: city,}; // variable storing values of account
    this.school.push(school); // push the new post into school array
  }

  getSchoolAdmin(){
    return this.schoolAdmin; // creating new array by copying the old array
  }

  addSchoolAdmin(username: string,password: string, fullName: string, email: string, phone: string, staffID: string, position: string){
    const schooladmin: SchoolAdmin = {username: username, password: password, fullName: fullName, email: email, phone: phone, staffID: staffID, position: position}; // variable storing values of account
    this.schoolAdmin.push(schooladmin); // push the new post into school array

  }

  getSchoolHelpAdmin(){
    return this.schoolHelpAdmin;
  }

  addSchoolHelpAdmin(){

  }

  getRequest(){
    return this.request;
  }

  AddRequest(description: string,datetime: Date, studentlevel: string, numofexpectedstudents: string, status: string, school_name: string, city: string, resourcedescription: string, resourcetype: string, resourcenum: string, requestID: string, requesttype: string,requestdate: Date, remarks: string, volunteerUsername: string){ // method to add account with arguments
    const request: Request = {description: description, datetime: datetime, studentlevel: studentlevel, numofexpectedstudents: numofexpectedstudents, status: status, school_name: school_name, city: city, resourcedescription:resourcedescription, resourcetype:resourcetype, resourcenum:resourcenum, requestID: requestID, requesttype:requesttype,requestdate:requestdate, remarks:remarks, volunteerUsername: volunteerUsername}; // variable storing values of account
    this.request.push(request); // push the nre post into account array
  }
}
