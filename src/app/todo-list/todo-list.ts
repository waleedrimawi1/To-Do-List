import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItem, Task } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  inputValue = ''
  items: Task[] = []

  addItem() {
    if(this.inputValue){
      this.items.push({
        text: this.inputValue,
        isChecked: false
      })
      this.inputValue = ''
    }
  }

  deleteItem(index: number){
    this.items.splice(index, 1)
  }
}