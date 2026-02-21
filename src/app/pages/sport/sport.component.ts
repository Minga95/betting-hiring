import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import { selectEventiPerSport } from '../../store/events.selectors';
import { SportEvent } from '../../models/event.model';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
})
export class SportComponent implements OnInit {
  eventi$!: Observable<SportEvent[]>;
  nomeSport$!: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    
    this.nomeSport$ = this.route.paramMap.pipe(
      map((params) => params.get('sport') || '')
    );

    this.eventi$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const sport = params.get('sport') || '';
        return this.store.select(selectEventiPerSport(sport));
      })
    );
  }
}
