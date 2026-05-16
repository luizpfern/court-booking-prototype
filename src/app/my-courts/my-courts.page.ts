import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-courts',
  templateUrl: './my-courts.page.html',
  styleUrls: ['./my-courts.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonIcon],
})
export class MyCourtsPage {
  courts = [
    { id: 1, name: 'Quadra Futebol Society 1', sport: 'Futebol', price: 60, active: true, bookingsToday: 3 },
    { id: 2, name: 'Quadra Futebol Society 2', sport: 'Futebol', price: 60, active: true, bookingsToday: 1 },
    { id: 3, name: 'Quadra de Vôlei A', sport: 'Vôlei', price: 50, active: true, bookingsToday: 2 },
    { id: 4, name: 'Quadra de Vôlei B', sport: 'Vôlei', price: 50, active: false, bookingsToday: 0 },
  ];

  sportIcons: { [key: string]: string } = {
    'Futebol': 'football-outline',
    'Vôlei': 'tennisball-outline',
    'Beach Tennis': 'tennisball-outline',
    'Tênis': 'tennisball-outline',
  };

  constructor(private router: Router) {}

  get activeCourtsCount() {
    return this.courts.filter(court => court.active).length;
  }

  get inactiveCourtsCount() {
    return this.courts.filter(court => !court.active).length;
  }

  get totalBookingsToday() {
    return this.courts.reduce((total, court) => total + court.bookingsToday, 0);
  }

  navigateToForm(id?: number) {
    this.router.navigate(['/court-form']);
  }

  navigateToSchedule() {
    this.router.navigate(['/court-schedule']);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  toggleCourtStatus(court: { active: boolean }) {
    court.active = !court.active;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToCourts() {
    this.router.navigate(['/my-courts']);
  }

  goToSchedule() {
    this.router.navigate(['/court-schedule']);
  }

  goToProfile() {
    this.router.navigate(['/profile-company']);
  }
}
