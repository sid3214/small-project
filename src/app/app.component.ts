import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginapp';
  ngOnInit(){
    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAGpDqYzo8z-PDOJ0thG8Ou8wN7nn4RzeU",
    authDomain: "angular7login-71d05.firebaseapp.com",
    databaseURL: "https://angular7login-71d05.firebaseio.com",
    projectId: "angular7login-71d05",
    storageBucket: "angular7login-71d05.appspot.com",
    messagingSenderId: "340978541500"
  };
  firebase.initializeApp(config);
  }
}