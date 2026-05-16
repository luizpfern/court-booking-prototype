import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonIcon],
})
export class BookingPage {
  court = {
    name: 'Quadra Futebol Society 1',
    sport: 'Futebol',
    establishment: 'Arena Sport Center',
    price: 60,
  };

  selectedDate: string = '';
  selectedTime: string = '';

  availableTimes: string[] = [
    '07:00', '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  unavailableTimes: string[] = ['09:00', '10:00', '17:00', '18:00'];

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

  selectDate(date: string) {
    this.selectedDate = date;
  }

  selectTime(time: string) {
    if (!this.unavailableTimes.includes(time)) {
      this.selectedTime = time;
    }
  }

  isUnavailable(time: string): boolean {
    return this.unavailableTimes.includes(time);
  }

  confirmBooking() {
    this.router.navigate(['/my-bookings']);
  }

  goBack() {
    this.router.navigate(['/establishment/1']);
  }
}