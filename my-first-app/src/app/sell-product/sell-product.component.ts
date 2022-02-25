import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: any = [
    {
      "id": 1,
      "p_name": "hair oil",
      "price": 40,
      "qunt_av": 5,
      "manu_loc": "suart",
      "presentstock": "100",
      "add": 0,
      "cost":0
    },
    {
      "id": 2,
      "p_name": "facewash",
      "price": 50,
      "qunt_avl": 8,
      "manu_loc": "bhavnagar",
      "presentstock": "118",
      "add": 0,
      "cost":0
    },
    {
      "id": 3,
      "p_name": "baby soap",
      "price": 15,
      "qunt_avl": 20,
      "manu_loc": "nashik",
      "presentstock": "187",
      "add": 0,
      "cost":0
    },
    {
      "id": 4,
      "p_name": "shampoo",
      "price": 80,
      "qunt_avl":5,
      "manu_loc": "suart",
      "presentstock": "99",
      "add": 0,
      "cost":0
    },
    {
      "id": 5,
      "p_name": "dry fruit",
      "price": 40,
      "qunt_avl": 50,
      "manu_loc": "suart",
      "presentstock": "50",
      "add": 0,
      "cost":0
    },{
      "id": 6,
      "p_name": "raice",
      "price": 40,
      "qunt_avl": 50,
      "manu_loc": "ahmedabad",
      "presentstock": "50",
      "add": 0,
      "cost":0
    }
  ];


  @Output() newItemEvent= new EventEmitter<any>();
  quntity(value:any)
    {
     let i=value.id;
     this.products[i].add++;
     this.products[i].cost=this.products[i].add *this.products[i].price;
      this.newItemEvent.emit(this.products[i]);
    }
}
