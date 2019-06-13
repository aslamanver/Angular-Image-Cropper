import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CropAppComponent } from './crop-app/crop-app.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'crop', component: CropAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
