import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'login-user',
    loadComponent: () => import('./login-user/login-user.page').then(m => m.LoginUserPage)
  },
  {
    path: 'login-company',
    loadComponent: () => import('./login-company/login-company.page').then(m => m.LoginCompanyPage)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'booking',
    loadComponent: () => import('./booking/booking.page').then(m => m.BookingPage)
  },
  {
    path: 'establishment/:id',
    loadComponent: () => import('./establishment/establishment.page').then(m => m.EstablishmentPage)
  },
  {
    path: 'my-bookings',
    loadComponent: () => import('./my-bookings/my-bookings.page').then(m => m.MyBookingsPage)
  },
  {
    path: 'profile-user',
    loadComponent: () => import('./profile-user/profile-user.page').then(m => m.ProfileUserPage)
  },
  {
    path: 'my-courts',
    loadComponent: () => import('./my-courts/my-courts.page').then(m => m.MyCourtsPage)
  },
  {
    path: 'court-schedule',
    loadComponent: () => import('./court-schedule/court-schedule.page').then(m => m.CourtSchedulePage)
  },
  {
    path: 'profile-company',
    loadComponent: () => import('./profile-company/profile-company.page').then(m => m.ProfileCompanyPage)
  },
  {
    path: 'court-form',
    loadComponent: () => import('./court-form/court-form.page').then(m => m.CourtFormPage)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'welcome'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
