import { Injectable } from '@angular/core'; //Get the post model
import { Account } from './account.model'

@Injectable({providedIn: 'root'})

export class AccService{ //Create a account class
  private account:Account[]=[]; //Set type to Account array(model) and assign to empty array

  //to retrieve the post
  getAcc(){
    return this.account; // creating new array by copying the old array
  }

  addAcc(username: string,password: string, fullName: string, email: string, phone: string, occupation: string, dob: string){ // method to add account with arguments
    const account: Account = {username: username, password: password, fullName: fullName, email: email, phone: phone, occupation: occupation, dob: dob}; // variable storing values of account
    this.account.push(account); // push the nre post into account array
  }
}
