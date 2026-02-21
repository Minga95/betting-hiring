import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { SportConCategorie } from '../models/event.model';

const selectEventsState = (state: AppState) => state.events;

export const selectTuttiGliEventi = createSelector(
  selectEventsState,
  state => state.lista
);

export const selectCaricamento = createSelector(
  selectEventsState,
  state => state.caricamento
);

export const selectErrore = createSelector(
  selectEventsState,
  state => state.errore
);

export const selectSportConCategorie = createSelector(
  selectTuttiGliEventi,
  (eventi): SportConCategorie[] => {
    const result: SportConCategorie[] = [];

    eventi.forEach(e => {
      let sportObj = result.find(s => s.sport === e.sport);

      if (!sportObj) {
        sportObj = { sport: e.sport, categorie: [] };
        result.push(sportObj);
      }

      if (!sportObj.categorie.includes(e.categoria)) {
        sportObj.categorie.push(e.categoria);
      }
    });

    return result;
  }
);

export const selectEventiPerSport = (sport: string) =>
  createSelector(selectTuttiGliEventi, eventi =>
    eventi.filter(e => e.sport === sport)
  );

export const selectEventiPerCategoria = (categoria: string) =>
  createSelector(selectTuttiGliEventi, eventi =>
    eventi.filter(e => e.categoria === categoria)
  );

export const selectEventoPerId = (id: number) =>
  createSelector(selectTuttiGliEventi, eventi =>
    eventi.find(e => e.id === id)
  );