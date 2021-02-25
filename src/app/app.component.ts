import { Component } from '@angular/core';
interface Website {
  value: string;
  viewValue: string;
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webApp';
  websites: Website[] = [
    {value: '1', viewValue: 'ItSolutionStuff.com'},
    {value: '2', viewValue: 'HDTuto.com'},
    {value: '3', viewValue: 'Nicesnippets.com'}
  ];
}
