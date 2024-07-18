import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './Component/Forms/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './Component/Forms/template-forms/template-forms.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { Cookies1Component } from './Component/cookies/cookies1/cookies1.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { authGuard } from './Guards/auth.guard';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  //base url
    { path: 'employee', component: EmployeeComponent, title: 'Employee Page' },
    { path: 'home', component: DashboardComponent, title: 'Home Page', canActivate: [authGuard] },
    { path: 'aboutus', component: AboutUsComponent, title: 'About Us', canActivate: [authGuard] },
    { path: 'contactus', component: ContactUsComponent, title: 'Contact Us', canActivate: [authGuard] },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'Cookies', component: Cookies1Component, title: 'Cookies' },
    { path: 'template', component: TemplateFormsComponent, title: 'Template Driven Forms' },
    { path: 'reactive', component: ReactiveFormsComponent, title: 'Reactive Forms' },

    { path: 'aboutusnew', component: AboutUsComponent, outlet: 'outlet2' },
    { path: 'aboutusnew/:empid', component: AboutUsComponent, outlet: 'outlet2' },

    { path: '**', component: PageNotFoundComponent, title: '404-Page Not Found' }, //wild card route
];
