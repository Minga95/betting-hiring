import { SportEvent } from '../models/event.model';

export interface EventsState {
  lista: SportEvent[];
  caricamento: boolean;
  errore: string | null;
}

export interface AppState {
  events: EventsState;
}