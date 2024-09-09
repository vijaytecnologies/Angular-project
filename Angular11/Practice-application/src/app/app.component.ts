import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   isloggedIn:string 
  constructor(private service:LoginServiceService ,private router:Router){}

  ngOnInit(){
    console.log('app', this.service.isLogedin())
    this.isloggedIn = this.service.isLogedin();
    if(!this.isloggedIn){
      this.router.navigate(['/login'])
    }
  }
   //call back practice
    
    tasks(){
      setTimeout(() => {
        console.log('task 1 done');
        setTimeout(()=>{
          console.log('task 2 done');
          setTimeout(()=>{
            console.log('task 3 done')
          },1000)
        },2000)

      }, 2000);
     
    }
   
  
}


