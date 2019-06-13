import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CropAppComponent } from './crop-app/crop-app.component';
import { CropServiceService } from './services/crop-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CropAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CropServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
