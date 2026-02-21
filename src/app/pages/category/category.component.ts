import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import { selectEventiPerCategoria } from '../../store/events.selectors';
import { SportEvent } from '../../models/event.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  eventi$!: Observable<SportEvent[]>;
  nomeCategoria$!: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
   
    this.nomeCategoria$ = this.route.paramMap.pipe(
      map((params) => params.get('categoria') || '')
    );

    this.eventi$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const categoria = params.get('categoria') || '';
        return this.store.select(selectEventiPerCategoria(categoria));
      })
    );
  }
}
