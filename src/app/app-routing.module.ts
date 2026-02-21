import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SportComponent } from './pages/sport/sport.component';
import { CategoryComponent } from './pages/category/category.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sport/:sport', component: SportComponent },
  { path: 'categoria/:categoria', component: CategoryComponent },
  { path: 'evento/:id', component: EventDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
