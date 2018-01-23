import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebService } from '../../services/service';
import { Router } from "@angular/router";
import * as _ from 'lodash';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list_array=[];
  public cart=[];
  constructor(private httpservice: WebService,public router:Router) { 
    this.get_list();
  }

  ngOnInit() {
  }
  update_list(){
    var list = JSON.parse(localStorage.getItem('items'));
    this.cart=list;
    for(var i=0;i<list.length;i++){
      for(var j=0;j<this.list_array.length;j++){
        if(list[i].id==this.list_array[j].id){
          this.list_array[j].flag=true;
           this.list_array[j].quantity=list[i].quantity;
        }
      }
    }
  }
  get_list(){
    this.httpservice.get_items_list().subscribe(result =>{
      this.list_array = result;
      for(var i=0;i<this.list_array.length;i++){
        this.list_array[i].flag=false;
        this.list_array[i].quantity=0;
      }
      if(localStorage.getItem('items')!="undefined" && localStorage.getItem('items')!=undefined){
        this.update_list();
      }
    },
      error => { 
        alert("error"); 
      }
    );
  };
  add_to_cart(id,index,flag){
    if(!flag){
      this.list_array[index].flag=true;
      this.list_array[index].quantity=1;
      this.cart.push(this.list_array[index]);

    }
    if(flag){
      for(var i =0;i<this.cart.length;i++){
        if(this.cart[i].id==id){
          this.cart.splice(i,1);
          this.list_array[index].flag=false;
          this.list_array[index].quantity=0;
        }
      }
    }
  }
  proceed(){
    localStorage.setItem('items',JSON.stringify(this.cart));
    this.router.navigateByUrl("items-list");
  }
}
