import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';
import { selectTuttiGliEventi, selectCaricamento } from '../../store/events.selectors';
import { caricaEventi } from '../../store/events.actions';
import { SportEvent } from '../../models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  eventi$!: Observable<SportEvent[]>;
  caricamento$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.eventi$ = this.store.select(selectTuttiGliEventi);
    this.caricamento$ = this.store.select(selectCaricamento);
    this.store.dispatch(caricaEventi());
  }
}
