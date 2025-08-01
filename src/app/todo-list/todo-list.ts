import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  inputValue = ''
  items:string[] = []
  
  addItem() {
    if(this.items){
      this.items.push(this.inputValue)
      this.inputValue = ''
    }
  }

  deleteItem(index:number){
    this.items.splice(index,1)
  }
}


