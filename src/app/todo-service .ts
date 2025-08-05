import { Injectable } from '@angular/core';
import { Task } from './todo-item/todo-item';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: Task[] = [];
  private cookieName = 'todoTasks';

  constructor(private cookieService: CookieService) {
    this.loadItemsFromCookies();
  }

  addItem(inputValue: string): void {
    if (inputValue) {
      this.items.push({
        text: inputValue,
        isChecked: false
      });
      this.saveItemsToCookies();
    }
  }

  deleteItem(index: number): void {
      this.items.splice(index, 1);
      this.saveItemsToCookies();
  }

  updateItemCheckbox(index: number, isChecked: boolean): void {
    if (this.items[index]) {
      this.items[index].isChecked = isChecked;
      this.saveItemsToCookies();
    }
  }

  filterTasks(searchValue: string): Task[] {
  if (!searchValue) {
    return this.items;
  }
  return this.items.filter(item =>
    item.text.toLowerCase().includes(searchValue.toLowerCase())
  );
}

  private saveItemsToCookies(): void {
    const tasksJson = JSON.stringify(this.items);
    this.cookieService.set(this.cookieName, tasksJson, 30);
  }

  private loadItemsFromCookies(): void {
    if (this.cookieService.check(this.cookieName)) {
        const tasksJson = this.cookieService.get(this.cookieName);
        this.items = JSON.parse(tasksJson);
      
    }
  }
}
