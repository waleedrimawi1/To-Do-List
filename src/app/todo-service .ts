import { Injectable } from '@angular/core';
import { Task } from './todo-item/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: Task[] = [];

  addItem(inputValue: string): void {
    if (inputValue) {
      this.items.push({
        text: inputValue,
        isChecked: false
      });
    }
  }

  deleteItem(index: number): void {
      this.items.splice(index, 1);
  }
}
