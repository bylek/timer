import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Timer } from '../timer.model';
import { Observable, Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit, OnDestroy {

  time: string;
  timer: Timer;

  @Output()
  onCurrentTimerChange: EventEmitter<any> = new EventEmitter();

  private subscription: Subscription;

  @Input()
  set currentTimer(timer){
    this.timer = timer;
    this.setTime()
  };

  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe(() => {
      this.setTime();
    });
  }

  setTime() {
    if (this.timer) {
      this.time = this.timer.getTime();
    }
  }

  onTimerCreate() {
    this.timerService.createTimer()
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
