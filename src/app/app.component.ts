import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isListView : boolean = true;
  name = 'Garima Sharma';
  company = 'TCS';
  experience = '3.7';
  skills =['Angular','React JS','Node JS','HTML','CSS']

  toggleView(){
    this.isListView= !this.isListView
  }
}
