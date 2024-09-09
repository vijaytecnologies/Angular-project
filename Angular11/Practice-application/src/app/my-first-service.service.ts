import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {

  @ViewChild ("addUserForm") addUserForm:any

  constructor(private http: HttpClient) { }



 url = " https://angular-demo-project-826b2-default-rtdb.asia-southeast1.firebasedatabase.app"

  // to get all users data

  allUsers() {
    return this.http.get("https://angular-demo-project-826b2-default-rtdb.asia-southeast1.firebasedatabase.app/users.json").pipe(map((response) => {
      let data = null;

      data = Object.values(response)
      return data;
    }))

  }

  // to add user

  addUser() {
    if (this.addUserForm.valid) {
      this.http.post('https://angular-demo-project-826b2-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', this.addUserForm.value)

    }
  }

  //delete user 
    
    delete(userId:any){
       return this.http.delete(`${this.url}/users/${userId}`)
    };

}
