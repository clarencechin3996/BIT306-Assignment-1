import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './header/loginHeader/login.header';
import { HeaderPage2Component } from './header/pageHeader2/page2.header';
import { LoginComponent } from './auth/login/login.component';
import { HeaderRegisterComponent } from './header/registerHeader/register.header';
import { RegisterComponent } from './auth/register/register.component';
import { ViewRequestComponent } from './volunteer/view-request/view-request.component';
import { HeaderPageComponent } from './header/pageHeader/page.header';
import { HomePageComponent } from './volunteer/home-page/home-page.component';
import { RegisterSchoolComponent } from './admin/register-school/register-school.component';
import { HeaderRegisterSchoolComponent } from './header/RegisterSchoolHeader/registerschool.header';
import { SubmitRequestComponent } from './admin/submit-request/submit-request.component';
import { RequestDialogComponent } from './volunteer/view-request/view-request.component';
import { JustHeaderComponent } from './header/header/header.component';
import { JustFooterComponent } from './footer/footer.component';
import { ReviewOfferComponent } from './admin/review-offer/review-offer.component';
import { AcceptOfferDialogComponent } from './admin/review-offer/review-offer.component';
import { CloseOfferDialogComponent } from './admin/review-offer/review-offer.component';
import { SchoolAdminHomepageComponent } from './admin/school-admin/school-admin-homepage.component';
import { SchoolHelpAdminHomepageComponent } from './admin/school-help-admin/school-help-admin-homepage.component';
import { CheckRequestComponent } from './volunteer/check-request/check-request';

import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
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
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    LoginComponent,
    HeaderRegisterComponent,
    RegisterComponent,
    HeaderPageComponent,
    CheckRequestComponent,
    HeaderPage2Component,
    ViewRequestComponent,
    RegisterSchoolComponent,
    HomePageComponent,
    SchoolAdminHomepageComponent,
    SchoolHelpAdminHomepageComponent,
    HeaderRegisterSchoolComponent,
    SubmitRequestComponent,
    RequestDialogComponent,
    AcceptOfferDialogComponent,
    CloseOfferDialogComponent,
    JustHeaderComponent,
    JustFooterComponent,
    ReviewOfferComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
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
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
