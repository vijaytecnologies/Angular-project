import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }
  addUserForm = this.fb.group({
    fullName: ['', Validators.required],
    gender: ['', Validators.required],
    date: ['', Validators.required],
    email: ['', Validators.required],
    contact: ['', [Validators.required, Validators.minLength(10), this.onlyNumbers]],
    selectCountry: ['Select Country'],

  })

  //custom validation for only numbers input
  onlyNumbers(input) {
    let pattern = /^\d+$/;
    if (pattern.test(input.value)) {
      return null
    }
    return {
      notNumber: true
    }
  }

  //add user method
  addUser() {
    if (this.addUserForm.valid) {
      this.http.post('https://angular-demo-project-826b2-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', this.addUserForm.value)
        .subscribe((res) => {
          console.log(res);
          this.addUserForm.reset()
        });

    }



  };
  /// for testing

 


}

