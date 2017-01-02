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
  public currentTimer: Timer;

  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.getTimers();
  }

  getTimers() {
    this.timerService.getTimers()
      .subscribe(
        timers => {
          this.timers = timers.filter(function(timer){
            return !!timer.finish_date;
          });

          this.currentTimer = timers.filter(function(timer){
            return !timer.finish_date;
          })[0];
        }
      );
  }

  onCurrentTimerChange() {
    this.getTimers();
  }

}
