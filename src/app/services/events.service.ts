import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SportEvent } from '../models/event.model';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<SportEvent[]> {
    return this.http.get<SportEvent[]>(`${API_URL}/events`);
  }

  getEventById(id: number): Observable<SportEvent> {
    return this.http.get<SportEvent>(`${API_URL}/event/${id}`);
  }
}
