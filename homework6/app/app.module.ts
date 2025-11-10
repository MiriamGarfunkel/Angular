import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReverseNamePipe } from './pipes/reverse-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseNamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
