import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import { selectEventoPerId } from '../../store/events.selectors';
import { SportEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.less'],
})
export class EventDetailComponent implements OnInit {
  evento$!: Observable<SportEvent | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.evento$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = parseInt(params.get('id') || '0');
        return this.store.select(selectEventoPerId(id));
      })
    );
  }
}
