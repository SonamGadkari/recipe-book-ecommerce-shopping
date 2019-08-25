import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  selectedOption = 'recipe';

  onGettingData(selectedOption: string) {
    this.selectedOption = selectedOption;
  }
  onEventClick() {

  }
}
