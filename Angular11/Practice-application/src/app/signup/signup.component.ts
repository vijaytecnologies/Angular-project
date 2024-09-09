import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }
  message:boolean = false
 display(){
  console.log('fn')

 }

}
