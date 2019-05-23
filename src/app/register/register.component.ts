import { notificationService } from './../shared/notification.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private notifier:notificationService) { }

  ngOnInit() {
  }
  submit(form:NgForm){
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(userdata=>{
      console.log(userdata);
      userdata.user.sendEmailVerification();
      const message =` A verification email is sent to ${email} kindly pleace check your inbox and follow the steps in the verification email once verification email once verification complete please login `
      this.notifier.display('success',message)
    }).catch(err=>{
      console.log(err);
      this.notifier.display('error',err.message);
    })
  }

}
