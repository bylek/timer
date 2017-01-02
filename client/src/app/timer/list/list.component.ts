import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../timer.model';

@Component({
  selector: 'app-timer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() timers: Timer[];

  constructor() { }

  ngOnInit() {
  }

}
