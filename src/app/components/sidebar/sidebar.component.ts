import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';
import { selectSportConCategorie } from '../../store/events.selectors';
import { SportConCategorie } from '../../models/event.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  @Output() navigato = new EventEmitter<void>();

  sportConCategorie$!: Observable<SportConCategorie[]>;

  sportEspansi: string[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.sportConCategorie$ = this.store.select(selectSportConCategorie);
  }

  toggleSport(sport: string): void {
    if (this.sportEspansi.includes(sport)) {
      this.sportEspansi = this.sportEspansi.filter(s => s !== sport);
    } else {
      this.sportEspansi.push(sport);
    }
  }

  isSportEspanso(sport: string): boolean {
    return this.sportEspansi.includes(sport);
  }

  onNavigazione(): void {
    this.navigato.emit();
  }

  getSportIcon(sport: string): string {
    const icone: Record<string, string> = {
      Calcio: '⚽',
      Basket: '🏀',
      Tennis: '🎾',
    };
    return icone[sport] ?? '🏆';
  }
}