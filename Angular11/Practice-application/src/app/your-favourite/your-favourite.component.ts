import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-favourite',
  templateUrl: './your-favourite.component.html',
  styleUrls: ['./your-favourite.component.css']
})
export class YourFavouriteComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  url = 'https://fakestoreapi.com/products'
  products = null
  // getData(){
  //   this.http.get('https://fakestoreapi.com/products')
  //   .subscribe((apidata)=>{
  //     this.products = apidata
  //     console.log(apidata)
  //   })
  // }

  //to display product price
  display(product){
    this.router.navigate(['/product', product.price])
  }

  //a promise to get data
     
   getData(){
    let url = 'https://fakestoreai.com/products';
    fetch(url)
      .then(data => {
        this.products = data
      })
      .catch(error => {
        console.error('something went wrong')
      });

  }

}

