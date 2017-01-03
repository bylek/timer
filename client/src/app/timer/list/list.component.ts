import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() timers: Timer[];

  constructor(
    private timerService: TimerService
  ) { }

  onRemove(timer: Timer) {
    let canRemove = confirm('Are you sure?');
    if (canRemove) {
      console.log('timer', timer);
      this.timerService.deleteTimer(timer)
        .subscribe(
          () => {
            let index = this.timers.indexOf(timer);
            this.timers.splice(index, 1);
          }
        );
    }
  }
}
