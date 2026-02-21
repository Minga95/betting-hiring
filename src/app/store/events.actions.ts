import { createAction, props } from '@ngrx/store';
import { SportEvent } from '../models/event.model';

export const caricaEventi = createAction('[Events] Carica eventi');

export const caricaEventiSuccesso = createAction(
  '[Events] Carica eventi successo',
  props<{ eventi: SportEvent[] }>()
);

export const caricaEventiErrore = createAction(
  '[Events] Carica eventi errore',
  props<{ errore: string }>()
);