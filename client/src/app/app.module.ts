import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AUTH_PROVIDERS,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
