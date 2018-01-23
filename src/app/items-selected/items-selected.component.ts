import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/service';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-items-selected',
  templateUrl: './items-selected.component.html',
  styleUrls: ['./items-selected.component.css']
})
export class ItemsSelectedComponent implements OnInit {
  public items_selected=[];
  constructor(public router:Router) { 
    this.items_selected=JSON.parse(localStorage.getItem('items'));
  }

  ngOnInit() {
  }
  add(id,index){
    this.items_selected[index].quantity=this.items_selected[index].quantity+1;
    localStorage.setItem('items',undefined);
    localStorage.setItem('items',JSON.stringify(this.items_selected));
  }
  remove(id,index){
    this.items_selected[index].quantity=this.items_selected[index].quantity-1;
    if(this.items_selected[index].quantity==0){
      this.items_selected.splice(index,1);
    }
    localStorage.setItem('items',undefined);
    localStorage.setItem('items',JSON.stringify(this.items_selected));
  }
  checkout(){
    this.router.navigateByUrl('checkout');
  }
}
