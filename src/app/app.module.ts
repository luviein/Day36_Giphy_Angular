import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifComponent } from './components/gif.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { GifService } from './gif.service';

@NgModule({
  declarations: [
    AppComponent,
    GifComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
