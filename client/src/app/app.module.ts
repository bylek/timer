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
import { RegisterComponent } from './register/register.component';
import { TimerService } from './timer/timer.service';
import { CurrentComponent } from './timer/current/current.component';
import { ListComponent } from './timer/list/list.component';
import { TimerCreateComponent } from './timer/current/create/create.component';
import { CurrentTimerComponent } from './timer/current/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TimerComponent,
    CurrentComponent,
    ListComponent,
    TimerCreateComponent,
    CurrentTimerComponent
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
    AuthService,
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
