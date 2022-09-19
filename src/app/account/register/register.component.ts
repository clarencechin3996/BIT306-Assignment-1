
//import {Component, EventEmitter, Output} from '@angular/core'
import {Component} from '@angular/core'
//import { Post } from '../post.model';
import { AccService } from '../account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector:'app-account-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']
})

export class RegisterComponent{
  enteredUsername='';
  enteredPassword='';
  hide = true;
  constructor(public accService: AccService){}
  //@Output() postCreated = new EventEmitter<Post>();
  /*onAddPost(){
    const post:Post = {
      title:this.enteredTitle,
      content:this.enteredContent
    };
    this.postCreated.emit(post);
  }*/
  onAddAcc(form:NgForm){
    if(form.invalid){
      return;
    }
    this.accService.addAcc(form.value.username, form.value.password);
    form.resetForm();
/*
    const post:Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }*/
}
}
