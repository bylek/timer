import { Component, OnInit } from '@angular/core';
import { Timer } from './timer.model';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  public timers: Timer[];

  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.timerService.getTimers()
      .subscribe(
        timers => {
          console.log('timers', timers);
          this.timers = timers;
        }
      );
  }

}
