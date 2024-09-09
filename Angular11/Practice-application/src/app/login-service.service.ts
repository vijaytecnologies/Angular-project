import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isLogedin(){
    return localStorage.getItem('usertoken')
  }
}
