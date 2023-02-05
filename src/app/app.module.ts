import { AuthService } from './auth.service';
import { ColorDirective } from './color.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDirective } from './if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    IfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
