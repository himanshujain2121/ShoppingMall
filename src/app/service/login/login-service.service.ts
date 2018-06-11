import { Injectable } from '@angular/core';
import { User } from './login';

@Injectable()
export class LoginServiceService {

  constructor() { }

  login(user:User){
              if(user.username == 'Admin' && user.password == 'Admin'){
                return true;
              }
              return false;
  }
}
