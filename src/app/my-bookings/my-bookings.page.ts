import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonIcon],
})
export class MyBookingsPage {
  selectedTab: string = 'ativas';

  bookings = [
    {
      id: 1,
      court: 'Quadra Futebol Society 1',
      sport: 'Futebol',
      establishment: 'Arena Sport Center',
      date: '18/05/2026',
      time: '19:00',
      price: 60,
      status: 'confirmado',
    },
    {
      id: 2,
      court: 'Quadra de Vôlei A',
      sport: 'Vôlei',
      establishment: 'Arena Sport Center',
      date: '20/05/2026',
      time: '15:00',
      price: 50,
      status: 'confirmado',
    },
    {
      id: 3,
      court: 'Quadra Beach Tennis 1',
      sport: 'Beach Tennis',
      establishment: 'Beach Park Courts',
      date: '10/05/2026',
      time: '10:00',
      price: 80,
      status: 'concluido',
    },
    {
      id: 4,
      court: 'Quadra de Tênis A',
      sport: 'Tênis',
      establishment: 'Tênis Clube Ribeirão',
      date: '05/05/2026',
      time: '08:00',
      price: 90,
      status: 'cancelado',
    },
  ];

  constructor(private router: Router) {}

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  cancelBooking(id: number) {
    this.bookings = this.bookings.map(booking =>
      booking.id === id ? { ...booking, status: 'cancelado' } : booking
    );
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToBookings() {
    this.router.navigate(['/my-bookings']);
  }

  goToProfile() {
    this.router.navigate(['/profile-user']);
  }

  get filteredBookings() {
    if (this.selectedTab === 'ativas') {
      return this.bookings.filter(booking => booking.status === 'confirmado');
    }

    return this.bookings.filter(booking => booking.status !== 'confirmado');
  }
}