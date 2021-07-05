import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-site',
  templateUrl: './shopping-site.component.html',
  styleUrls: ['./shopping-site.component.css']
})
export class ShoppingSiteComponent implements OnInit {
formValue !:FormGroup;
ItemModelObj : ItemModel = new ItemModel();
ItemData : any;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue =this.formbuilder.group({
ItemName :[''],
Price :[''],
Description:['']
    })
    this.getAllItems();
  }
postItemDetails(){
  this.ItemModelObj.name= this.formValue.value.name;
  this.ItemModelObj.price = this.formValue.value.price;
  this.ItemModelObj.description = this.formValue.value.description;
  this.api.postItems(this.ItemModelObj)
  .subscribe(res=>{
    console.log(res);
  alert("Items added successfully")
  let ref =document.getElementById('cancle')
  ref?.click();
  this.formValue.reset();
  this.getAllItems();
  },
  err=>{
    alert("somthing went wrong");
  })
  }
  getAllItems(){
    this.postItemDetails.getItem()
    .subscribe(res=>{
      this.ItemData = res;
    })
  }
  deleteItems(row :any){
    this.postItemDetails.deleteItem(row .id)
    .subscribe(res=>{
      alert("Items Deleted")
    })
  }
  onEdit(row : any){
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['description'].setValue(row.description);
  }
}
