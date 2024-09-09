import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyFirstServiceService } from '../my-first-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MyFirstServiceService) { }

  ngOnInit(): void {
  }
  users = null;
  demo:any


  getUsersData() {
    this.service.allUsers()
      .subscribe((res: any) => {

        this.users = res
      })
  }
  /// delete user

  deleteUser(userId:any){
    this.service.delete(userId).subscribe((res)=>{
      this.getUsersData()
    })
  };

  ///Observable example
  myObservable = new Observable((data) => {
    data.next("Are you ready...");
    data.next(" ready...");


    setTimeout(() => {
      data.next("1");

    }, 2000);
    setTimeout(() => {
      data.next("2");

    }, 3000);
    setTimeout(() => {
      data.next("3");

    }, 4000);


  });
      
  onClick(){
    this.myObservable.subscribe((response:any)=>{
      this.demo = response
    })
  }

  ///rxjs operators

  marketPrice = of(775,880,999,250,350)
 
  subscription = this.marketPrice.subscribe((res)=>{
    console.log(res)
  })

}


