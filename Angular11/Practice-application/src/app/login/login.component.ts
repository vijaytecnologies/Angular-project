import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)])
    }
  )
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    localStorage.setItem('usertoken','david');
    window.location.href = 'http://localhost:4200';
  }

}
