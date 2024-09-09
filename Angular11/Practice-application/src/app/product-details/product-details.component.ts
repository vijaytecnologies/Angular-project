import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    
//    // Create a new Observable 
//    const sqnc = new observable(countOnetoTen);
      
//    // Execute the Observable and print the
//    // result of each notification
//    // next() is a call to countOnetoTen method 
//    // to get the next value from the observable 
//    sqnc.subscribe({
//        next(num) { console.log(num); }
//    });
    
//    // This function runs when subscribe()
//    // is called
//    function countOnetoTen(observer) {
        
//        for(var i = 1; i <= 10; i++) {
            
//            // Calls the next observable
//            // notification
//            observer.next(i);
//        }
    
//        // Unsubscribe after completing
//        // the sequence
//        return {unsubscribe(){}};
//    }
// }

   
  }

}




