import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TaskSphere Application';
  buttonText = "Check it"

  changeTitle(){
    // console.log("title", this.title)
    this.title = 'TaskSphere Web Application'
  }

  checkMouseEnter(){
    this.buttonText = 'You just hovered on me';
  }

  checkMouseLeave(){
    this.buttonText = 'Check it';
  }
}
