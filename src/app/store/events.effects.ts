import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { EventsService } from '../services/events.service';
import * as EventsActions from './events.actions';

@Injectable()
export class EventsEffects {

  caricaEventi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.caricaEventi),
      switchMap(() =>
        this.eventsService.getEvents().pipe(
          map(eventi => EventsActions.caricaEventiSuccesso({ eventi })),
          catchError(err =>
            of(
              EventsActions.caricaEventiErrore({
                errore: err?.message || 'Errore caricamento eventi'
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}
}