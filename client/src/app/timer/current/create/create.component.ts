import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-current-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class TimerCreateComponent {

  @Output()
  onCreate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onCreateTimer(comment) {
    this.onCreate.emit({comment});
  }

}
