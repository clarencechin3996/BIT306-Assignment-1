import { Injectable } from '@angular/core'; //Get the post model
import { Account } from './account.model'

@Injectable({providedIn: 'root'})

export class AccService{ //Create a service class
  private account:Account[]=[]; //Set type to Post array(model) and assign to empty array

  //to retrieve the post
  getAcc(){
    return this.account; // creating new array by copying the old array
  }

  addAcc(username: string,password: string){ // method to add post with arguments
    const account: Account = {username: username, password: password}; // variable storing values of post
    this.account.push(account); // push the nre post into posts array
  }
}
