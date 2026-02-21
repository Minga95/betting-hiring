import { Component, Input } from '@angular/core';
import { SportEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.less'],
})
export class EventCardComponent {
  @Input() evento!: SportEvent;
}
