import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public checkout=[];
  public items_number:number=0;
  constructor(public router:Router) { 
    this.checkout=JSON.parse(localStorage.getItem('items'));
    for(var i=0;i<this.checkout.length;i++){
      this.items_number=this.items_number + parseInt(this.checkout[i].quantity);
    }
  }

  ngOnInit() {
  }
  pay(){
    localStorage.setItem('items',undefined)
    swal({
      title: 'Successfull',
      text: 'You will be directed to home page',
      type: 'success',
      confirmButtonText: 'OK!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
        this.router.navigateByUrl("list");
    })
  }
  view_edit(){
    localStorage.setItem('items',JSON.stringify(this.checkout));
    this.router.navigateByUrl("items-list")
  }
}
