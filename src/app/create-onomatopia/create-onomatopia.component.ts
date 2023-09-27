import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  public newOnomatopia: string= "";

  @Output() sendOnomatopiaToParent: EventEmitter<any> = new EventEmitter();

  constructor(){}



  ngOnInit(): void {

   
  }

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia)
    // this.newOnomatopia= "";
  }

  

}
