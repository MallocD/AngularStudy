import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Gera uma tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-maneger'//Atributo

  name: string = 'John';
}
