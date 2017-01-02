import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Timer } from '../../timer.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-timer-current-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class CurrentTimerComponent implements OnInit, OnDestroy {

  time: string;
  timer: Timer;

  private subscription: Subscription;

  @Input()
  set currentTimer(timer){
    this.timer = timer;
    this.setTime()
  };

  @Output()
  onStop: EventEmitter<any> = new EventEmitter();

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter();

  onCommentUpdate(comment) {
    this.onUpdate.emit({comment});
  }

  onTimerStop() {
    this.onStop.emit();
  }

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
