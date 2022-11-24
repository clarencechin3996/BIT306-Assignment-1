import { CheckRequestComponent } from './volunteer/check-request/check-request';
import { SchoolHelpAdminHomepageComponent } from './admin/school-help-admin/school-help-admin-homepage.component';
import { SchoolAdminHomepageComponent } from './admin/school-admin/school-admin-homepage.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { ViewRequestComponent } from "./volunteer/view-request/view-request.component";
import { RegisterSchoolComponent } from "./admin/register-school/register-school.component";
import { SubmitRequestComponent } from "./admin/submit-request/submit-request.component";
import { HomePageComponent } from "./volunteer/home-page/home-page.component";
import { ReviewOfferComponent } from "./admin/review-offer/review-offer.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'view-request', component: ViewRequestComponent},
  {path: 'register-school', component: RegisterSchoolComponent},
  {path: 'submit-request', component: SubmitRequestComponent},
  {path: 'volunteer-home-page', component: HomePageComponent},
  {path: 'review-offer', component: ReviewOfferComponent},
  {path: 'school-admin-home', component: SchoolAdminHomepageComponent},
  {path: 'check-view-request', component: CheckRequestComponent},
  {path: 'school-help-admin-home', component: SchoolHelpAdminHomepageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
