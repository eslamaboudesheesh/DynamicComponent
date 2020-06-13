import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";
import { title } from 'process';
import { PlaceholderService } from '../services/placeholder.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public products:any
  
  //  public products = [
  //   {
  //     "ProductID": 1,
  //     "ProductName": "Chai",
  //     "SupplierID": 1,
  //     "CategoryID": 1,
  //     "QuantityPerUnit": "10 boxes x 20 bags",
  //     "UnitPrice": 18.0000,
  //     "UnitsInStock": 39,
  //     "UnitsOnOrder": 0,
  //     "ReorderLevel": 10,
  //     "Discontinued": false,
  //     "Category": {
  //         "CategoryID": 1,
  //         "CategoryName": "Beverages",
  //         "Description": "Soft drinks, coffees, teas, beers, and ales"
  //     }
  // }, {
  //     "ProductID": 2,
  //     "ProductName": "Chang",
  //     "SupplierID": 1,
  //     "CategoryID": 1,
  //     "QuantityPerUnit": "24 - 12 oz bottles",
  //     "UnitPrice": 19.0000,
  //     "UnitsInStock": 17,
  //     "UnitsOnOrder": 40,
  //     "ReorderLevel": 25,
  //     "Discontinued": false,
  //     "Category": {
  //         "CategoryID": 1,
  //         "CategoryName": "Beverages",
  //         "Description": "Soft drinks, coffees, teas, beers, and ales"
  //     }
  // }, {
  //     "ProductID": 3,
  //     "ProductName": "Aniseed Syrup",
  //     "SupplierID": 1,
  //     "CategoryID": 2,
  //     "QuantityPerUnit": "12 - 550 ml bottles",
  //     "UnitPrice": 10.0000,
  //     "UnitsInStock": 13,
  //     "UnitsOnOrder": 70,
  //     "ReorderLevel": 25,
  //     "Discontinued": false,
  //     "Category": {
  //         "CategoryID": 2,
  //         "CategoryName": "Condiments",
  //         "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  //     }
  // }, {
  //     "ProductID": 4,
  //     "ProductName": "Chef Anton's Cajun Seasoning",
  //     "SupplierID": 2,
  //     "CategoryID": 2,
  //     "QuantityPerUnit": "48 - 6 oz jars",
  //     "UnitPrice": 22.0000,
  //     "UnitsInStock": 53,
  //     "UnitsOnOrder": 0,
  //     "ReorderLevel": 0,
  //     "Discontinued": false,
  //     "Category": {
  //         "CategoryID": 2,
  //         "CategoryName": "Condiments",
  //         "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  //     }
  // }, {
  //     "ProductID": 5,
  //     "ProductName": "Chef Anton's Gumbo Mix",
  //     "SupplierID": 2,
  //     "CategoryID": 2,
  //     "QuantityPerUnit": "36 boxes",
  //     "UnitPrice": 21.3500,
  //     "UnitsInStock": 0,
  //     "UnitsOnOrder": 0,
  //     "ReorderLevel": 0,
  //     "Discontinued": true,
  //     "Category": {
  //         "CategoryID": 2,
  //         "CategoryName": "Condiments",
  //         "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  //     }
  // }, {
  //     "ProductID": 6,
  //     "ProductName": "Grandma's Boysenberry Spread",
  //     "SupplierID": 3,
  //     "CategoryID": 2,
  //     "QuantityPerUnit": "12 - 8 oz jars",
  //     "UnitPrice": 25.0000,
  //     "UnitsInStock": 120,
  //     "UnitsOnOrder": 0,
  //     "ReorderLevel": 25,
  //     "Discontinued": false,
  //     "Category": {
  //         "CategoryID": 2,
  //         "CategoryName": "Condiments",
  //         "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  //     }
  // }]
  public gridColumn =[
   
  {
    name:"id",
    title:"id",
    field:"id",
    width:30
  },{
    name:"title",
    title:"title",
    field:"title",
    width:180
  },{
    name:"body",
    title:"body",
    field:"body",
    width:180
  },
  {
    name:"option",
    title:"option",
    field:"option",
    width:180
  }
]

public ChildgridColumn =[
   
  {
    name:"id",
    title:"id",
    field:"id",
    width:30
  },{
    name:"title",
    title:"title",
    field:"title",
    width:180
  },{
    name:"body",
    title:"body",
    field:"body",
    width:180
  }
]
  public resolver:any;
  public componentRef:any
  constructor(private vf:ViewContainerRef,private componentFactoryResolver:ComponentFactoryResolver ,private placeholder:PlaceholderService) { }


  ngOnInit(): void {
    this.resolver = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
     this.componentRef =   this.vf.createComponent(this.resolver);
     this.add()
  }


  add(){
 this.placeholder.GetUser().subscribe((e)=>{ 
   if(e){
    this.products = e
    this.componentRef.instance.componentData = {
      component: this.products,
      gridField : this.gridColumn
    
     }
  
   this.componentRef.instance.update.subscribe( (value: any) => {
            this.onChildValueChange(value);
          });
   }
    
 })

 
  }

  onChildValueChange(value){
    let id =  value.dataItem.userId
    this.placeholder.GetPersonInfo(id).subscribe((e)=>{
      this.products
      if(e){
        this.componentRef.instance.ChildData = {
          component: e,
          gridField : this.ChildgridColumn,
         userId:id
         }
      }
    })
      }
}
