import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})

export class AppGroceryComponent implements OnInit {
  tasks = [];
  task = {
    name: '',
    strike: false,
    id: 0
  };

  isEdit: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }


  /**
   * addGrocery adds an item into the array
   */
  addGrocery() {
    if ((this.task?.name) && (!this.isEdit)) {
      this.tasks.push({
        name: this.task.name,
        strike: false,
        id: this.tasks.length
      });
    }
    else if(!this.isEdit){
      alert("Please add item")
    }
    this.task = {
      name: '',
      strike: false,
      id: 0
    };
    this.isEdit = false;
  }


  /**
   * Edit the selected Item
   * @param item
   */
  onEdit(item) {
    this.isEdit = true;
    this.task = item;
  }


  /**
   * Removes the selecteditem
   * @param selectedItem
   */
  removeGrocery(selectedItem) {
    var idPosition = selectedItem.id;
    this.tasks.splice(idPosition, 1);
    this.updateItemId();

    this.task = {
      name: '',
      strike: false,
      id: 0
    };
  }


  /**
   * Determines whether to strike the selected Item
   * @param selectedItem
   */
  markItem(selectedItem) {
    var idPostion = selectedItem.id;
    this.tasks[idPostion].strike = this.tasks[idPostion].strike ? false : true;
  }


  /**
   * Updates item id after deletion
   */
  updateItemId() {
    for (var i = 0; i < this.tasks.length; i++) {
      this.tasks[i].id = i;
    }
  }
}
