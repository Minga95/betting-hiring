import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { eventsReducer } from './store/events.reducer';
import { EventsEffects } from './store/events.effects';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SportComponent } from './pages/sport/sport.component';
import { CategoryComponent } from './pages/category/category.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EventCardComponent,
    HomeComponent,
    SportComponent,
    CategoryComponent,
    EventDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ events: eventsReducer }),
    EffectsModule.forRoot([EventsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
