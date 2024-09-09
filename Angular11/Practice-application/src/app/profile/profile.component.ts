import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile:any=[
    {
      name:'David',
      number:123456789,
      email:'xyz@123',
      status:"Active"

    }
  ]

}
