import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login/login-service.service';
import { User } from '../service/login/login';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-service',
  templateUrl: './login-service.component.html',
  styleUrls: ['./login-service.component.css']
})
export class LoginServiceComponent implements OnInit {

  user:User = new User();
  constructor(private userLogin:LoginServiceService, private route:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.userLogin.login(this.user)){
         this.route.navigate(['fashion']);
    }
  }
}
