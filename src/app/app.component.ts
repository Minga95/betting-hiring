import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Subscription } from 'rxjs';
import * as EventsActions from './store/events.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, OnDestroy {

  menuAperto = false;
  private pollingSub?: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(EventsActions.caricaEventi());
    this.pollingSub = interval(15000).subscribe(() => {
      this.store.dispatch(EventsActions.caricaEventi());
    });
  }

  ngOnDestroy(): void {
    this.pollingSub?.unsubscribe();
  }

  toggleMenu(): void {
    this.menuAperto = !this.menuAperto;
  }

  apriMenu(): void {
    this.menuAperto = true;
  }

  chiudiMenu(): void {
    this.menuAperto = false;
  }
}