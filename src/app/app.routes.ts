import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { TestComponent } from './test/test.component';
import { PatientTestComponent } from './patient-test/patient-test.component';
import { PatientTestResultComponent } from './patient-test-result/patient-test-result.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'staff-details',
        component: StaffDetailsComponent
    },

    {
        path: 'patient-details',
        component: PatientDetailsComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'patient-test',
        component: PatientTestComponent
    },
    {
        path: 'patient-test-result',
        component: PatientTestResultComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard/staff-details',
        redirectTo: '/staff-details',
        pathMatch: 'full'
    },
    {
        path: 'dashboard/patient-details',
        redirectTo: '/patient-details',
        pathMatch: 'full'
    },
    {
        path: 'staff-details/staff-details',
        redirectTo: '/staff-details',
        pathMatch: 'full'
    },
    {
        path: 'patient-details/patient-details',
        redirectTo: '/patient-details',
        pathMatch: 'full'
    },
    {
        path: 'staff-details/patient-details',
        redirectTo: '/patient-details',
        pathMatch: 'full'
    },
    {
        path: 'patient-details/staff-details',
        redirectTo: 'staff-details',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
