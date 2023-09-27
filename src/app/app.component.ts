import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'quest8';

  onomatopiaList!: string[];

  constructor(){
    this.onomatopiaList= [];
  }

  ngOnInit(): void {
    
  }

    onReceiveNewOnomatopia(event: any): void {
      this.onomatopiaList.push(event)
      console.log(event)
    }

}
