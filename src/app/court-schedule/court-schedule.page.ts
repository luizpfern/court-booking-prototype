import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-court-schedule',
  templateUrl: './court-schedule.page.html',
  styleUrls: ['./court-schedule.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
})
export class CourtSchedulePage {
  selectedCourtId: number = 1;
  selectedDate: string = '';

  courts = [
    { id: 1, name: 'Quadra Futebol 1' },
    { id: 2, name: 'Quadra Futebol 2' },
    { id: 3, name: 'Quadra Vôlei A' },
    { id: 4, name: 'Quadra Vôlei B' },
  ];

  slots = [
    { time: '07:00', client: null, status: 'livre' },
    { time: '08:00', client: 'Carlos Mendes', status: 'ocupado' },
    { time: '09:00', client: 'Ana Paula', status: 'ocupado' },
    { time: '10:00', client: null, status: 'livre' },
    { time: '11:00', client: null, status: 'livre' },
    { time: '12:00', client: null, status: 'bloqueado' },
    { time: '13:00', client: null, status: 'bloqueado' },
    { time: '14:00', client: 'Roberto Lima', status: 'ocupado' },
    { time: '15:00', client: null, status: 'livre' },
    { time: '16:00', client: null, status: 'livre' },
    { time: '17:00', client: 'Mariana Costa', status: 'ocupado' },
    { time: '18:00', client: 'Felipe Souza', status: 'ocupado' },
    { time: '19:00', client: null, status: 'livre' },
    { time: '20:00', client: 'Lucas Ferreira', status: 'ocupado' },
    { time: '21:00', client: null, status: 'livre' },
    { time: '22:00', client: null, status: 'livre' },
  ];

  dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);

    return {
      label: d.toLocaleDateString('pt-BR', { weekday: 'short' }),
      value: d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      full: d.toISOString().split('T')[0],
    };
  });

  constructor(private router: Router) {}

  selectCourt(id: number) {
    this.selectedCourtId = id;
  }

  selectDate(full: string) {
    this.selectedDate = full;
  }

  goBack() {
    this.router.navigate(['/dashboard']);
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

  get occupiedCount() {
    return this.slots.filter(slot => slot.status === 'ocupado').length;
  }

  get freeCount() {
    return this.slots.filter(slot => slot.status === 'livre').length;
  }

  get blockedCount() {
    return this.slots.filter(slot => slot.status === 'bloqueado').length;
  }
}
