import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
})
export class DashboardPage {
  establishment = {
    name: 'Arena Sport Center',
    logo: null,
  };

  stats = {
    todayBookings: 8,
    weekBookings: 34,
    monthRevenue: 2840,
    activeCourts: 4,
  };

  todaySchedule = [
    { time: '08:00', court: 'Quadra Futebol 1', client: 'Carlos Mendes', sport: 'Futebol', status: 'confirmado' },
    { time: '09:00', court: 'Quadra Vôlei A', client: 'Ana Paula', sport: 'Vôlei', status: 'confirmado' },
    { time: '10:00', court: 'Quadra Futebol 2', client: 'Roberto Lima', sport: 'Futebol', status: 'confirmado' },
    { time: '14:00', court: 'Quadra Vôlei B', client: 'Mariana Costa', sport: 'Vôlei', status: 'pendente' },
    { time: '19:00', court: 'Quadra Futebol 1', client: 'Felipe Souza', sport: 'Futebol', status: 'confirmado' },
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}