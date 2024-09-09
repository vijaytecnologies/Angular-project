import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  



  constructor(private fb:FormBuilder,private route: ActivatedRoute, private rout: Router,private http:HttpClient) {}

  newObject =  {
    title: 'iphone',
    price: 145000,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
  
  ngOnInit(): void {
  }

  contactForm = this.fb.group({
    fullName:['',[Validators.required,Validators.minLength(3),this.uppercase]],
    password:['',Validators.required],
    gender:['',Validators.required],
    date:['',Validators.required],

    email:['',Validators.required],
    contact:['',[Validators.required,Validators.minLength(10),this.onlyNumbers]],
    selectCountry:['Select Country'],
    request:['',Validators.required],
    checkbox:[]
  }

  )
  //custom validation for capital letter req
  uppercase(fullName){
    let pattern=/[A-Z]/
    if(pattern.test(fullName.value)){
      return null
    }
    return{
      uppercase:true
    }
  }
  //custom validation for only numbers input
  onlyNumbers(input){
    let pattern =/^\d+$/;
    if(pattern.test(input.value)){
      return null
    }
    return {
      notNumber:true
    }
  }

//creating a table on form submit request
  requestList = [];
  reqIndex:number=0;
  display:boolean= false
  edited:boolean= false;
  matched:boolean = false;
  onSubmitRequest(){
    if(this.contactForm.valid && this.requestList.length > 0){
      for(let i=0;i<this.requestList.length;i++){
        if(this.requestList[i] && (this.contactForm.controls.email.value == this.requestList[i].email))  {
          this.requestList[i] = this.contactForm.value;
          this.matched = true;
          this.contactForm.reset();

          break;
        }
      }

      if(!this.matched) {
        this.requestList.push(this.contactForm.value);
        this.contactForm.reset();
        this.display = true
        console.log(this.requestList)
      }
       
    } else if(this.contactForm.valid) {
      this.requestList.push(this.contactForm.value);
      this.contactForm.reset();
      this.display = true
      console.log(this.requestList)
    }
  }
  //delete request
  delReq(index: number) {
    this.requestList.splice(index);
  }
  //edit table
 editForm(req:any){
//  this.reqIndex = this.requestList.indexOf(req);
  //this.display =true;
  this.contactForm.patchValue(req)
 }



}
