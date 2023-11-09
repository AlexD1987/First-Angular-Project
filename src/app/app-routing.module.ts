import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent},
  { path: 'stories', component: StoriesComponent},
  { path: 'places', component: PlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
