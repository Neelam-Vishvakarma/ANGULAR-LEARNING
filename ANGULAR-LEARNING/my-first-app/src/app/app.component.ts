import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
  #name = "neelam"
  items=[];
  newTask;
  addToList() {
    if (this.newTask == '') {
    }
    else {
        this.items.push(this.newTask);
        this.newTask = '';
    }
}
}
