import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  inputValue = ''
  items:string[] = []
  isChecked = false

  addItem() {
    if(this.inputValue){
      this.items.push(this.inputValue)
      this.inputValue = ''
    }
  }

  deleteItem(index:number){
    this.items.splice(index,1)
  }
}


