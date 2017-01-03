import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TimerService } from '../timer.service';
import { Timer } from '../timer.model';

@Component({
  selector: 'app-timer-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent {

  @Input()
  timer: Timer;

  @Output()
  onCurrentTimerChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private timerService: TimerService
  ) { }

  onTimerUpdate(data) {
    this.timerService.updateTimer(this.timer, data)
      .subscribe(() => {})
  }

  onTimerCreate(data) {
    this.timerService.createTimer(data)
      .subscribe(() => {
        this.onCurrentTimerChange.emit();
      })
  }

  onTimerStop() {
    this.timerService.stopTimer(this.timer)
      .subscribe(() => {
        this.onCurrentTimerChange.emit();
      });
  }

}
