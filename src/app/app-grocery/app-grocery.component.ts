import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {

  tasks = [];
  length: number;

  task = {
    name: '',
    id: 0
  };
  constructor() { }

  ngOnInit(): void {

  }


  /**
   * addGrocery adds an item into the array
   */
  addGrocery() {

    if ((this.task?.name) && (this.task.id == 0)) {
      this.tasks.push({ id: (new Date()).getTime(), name: this.task.name, strike: false });
    }
    else{
        console.log("else validation goes here");
    }
    this.task = {
      name: '',
      id: 0
    };
  }


  /**
   * Edit hte selected Item
   * @param item
   */
  onEdit(item) {
    this.task = item;
  }


  /**
   * Removes the selecteditem
   * @param selectedItem
   */
  removeGrocery(selectedItem) {
    for (let item of this.tasks) {
      if (item.id == selectedItem.id) {
        this.tasks.splice(this.tasks.indexOf(item), 1);
        break;
      }
    }
    this.task = {
      name: '',
      id: 0
    };
  }



  /**
   * Determines whether to strike the selected Item
   * @param selectedItem
   */
  onStrike(selectedItem) {
    for (let item of this.tasks) {
      if (selectedItem.id == item.id) {
        if (item.strike) {
          item.strike = false;
        }
        else {
          item.strike = true;
        }
        break;
      }
    }
  }
}
