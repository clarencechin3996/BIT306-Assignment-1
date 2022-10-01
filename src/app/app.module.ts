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
import { ViewRequestComponent } from './volunteer/view-request/view-request.component';
import { HeaderPageComponent } from './header/pageHeader/page.header';
import { HomePageComponent } from './volunteer/home-page/home-page.component';
import {MatTableModule} from '@angular/material/table'; 
import { RegisterSchoolComponent } from './admin/register-school/register-school.component';
import { HeaderRegisterSchoolComponent } from './header/RegisterSchoolHeader/registerschool.header';
import { SubmitRequestComponent } from './admin/submit-request/submit-request.component';
import { RequestDialogComponent } from './volunteer/view-request/view-request.component';

import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatDialogModule} from '@angular/material/dialog'; 

const appRoutes:Routes = [
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'view-request', component: ViewRequestComponent},
  {path: 'register-school', component: RegisterSchoolComponent},
  {path: 'submit-request', component: SubmitRequestComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    LoginComponent,
    HeaderRegisterComponent,
    RegisterComponent,
    HeaderPageComponent,
    ViewRequestComponent,
    RegisterSchoolComponent,
    HomePageComponent,
    HeaderRegisterSchoolComponent,
    SubmitRequestComponent,
    RequestDialogComponent
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
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
