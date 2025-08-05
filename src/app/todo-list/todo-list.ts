import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItem, Task } from '../todo-item/todo-item';
import { TodoService } from '../todo-service ';
import { TODO_CONSTANTS } from '../TODO_CONSTANTS';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoItem,],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  readonly CONSTANTS = TODO_CONSTANTS;

  inputValue = ''
  searchValue = ''
  items: Task[] = []
  constructor(private todoService: TodoService) {
    this.items = this.todoService.items
  }

  addItem() {
    if(this.inputValue){
      this.todoService.addItem(this.inputValue);
      this.inputValue = ''
    }
  }

  deleteItem(index: number){
    this.todoService.deleteItem(index);
  }

  onCheckboxChange(event: {index: number, isChecked: boolean}) {
    this.todoService.updateItemCheckbox(event.index, event.isChecked);
  }

  filteredTask() {
    return this.todoService.filterTasks(this.searchValue);
  }

}