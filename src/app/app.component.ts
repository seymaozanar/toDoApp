import { Component } from '@angular/core';
import { Model,ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 model =new Model();
 getName(){
   return this.model.user;

 }
 getItems(){              //gets the all items which are false
   return this.model.items.filter(item=>!item.action);
 }
 addItem(value){
   if(value!=""){

    this.model.items.push(new ToDoItem(value,false));
   }
 }
}
