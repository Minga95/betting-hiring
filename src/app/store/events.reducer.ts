import { createReducer, on } from '@ngrx/store';
import { EventsState } from './app.state';
import * as EventsActions from './events.actions';

const statoIniziale: EventsState = {
  lista: [],
  caricamento: false,
  errore: null,
};

export const eventsReducer = createReducer(
  statoIniziale,

  on(EventsActions.caricaEventi, state => ({
    ...state,
    caricamento: true,
    errore: null
  })),

  on(EventsActions.caricaEventiSuccesso, (state, action) => ({
    ...state,
    lista: action.eventi,
    caricamento: false
  })),

  on(EventsActions.caricaEventiErrore, (state, action) => ({
    ...state,
    caricamento: false,
    errore: action.errore
  }))
);