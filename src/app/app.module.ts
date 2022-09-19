import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './header/loginHeader/login.header';
import { LoginComponent } from './account/login/login.component';
import { HeaderRegisterComponent } from './header/registerHeader/register.header';
import { RegisterComponent } from './account/register/register.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    LoginComponent,
    HeaderRegisterComponent,
    RegisterComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
