import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TODO_CONSTANTS } from '../TODO_CONSTANTS';

export interface Task {
  text: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  readonly CONSTANTS = TODO_CONSTANTS;

  item = input.required<Task>();
  index = input.required<number>();
  delete = output<number>();
  checkboxChange = output<{index: number, isChecked: boolean}>();
  showPopup = false


  onDelete() {
    this.showPopup = true;
  }

  onConfirmDelete() {
    this.delete.emit(this.index());
    this.showPopup = false;

  }

  onClosePopup() {
    this.showPopup = false;
  }

  onCheckboxChange() {
    this.checkboxChange.emit({
      index: this.index(),
      isChecked: this.item().isChecked
    });
  }

}