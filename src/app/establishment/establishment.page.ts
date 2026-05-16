import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.page.html',
  styleUrls: ['./establishment.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonIcon],
})
export class EstablishmentPage {
  establishment = {
    id: 1,
    name: 'Arena Sport Center',
    address: 'Av. Presidente Vargas, 1200 - Ribeirão Preto, SP',
    phone: '(16) 99999-1234',
    rating: 4.9,
    totalReviews: 128,
    openHours: 'Seg-Sex: 07h às 23h | Sab-Dom: 08h às 22h',
    sports: ['Futebol', 'Vôlei'],
    image: 'assets/images/establishments/arena-sport.png',
    description: 'Complexo esportivo completo com quadras cobertas e descobertas, vestiários modernos e estacionamento gratuito.'
  };

  courts = [
    { id: 1, name: 'Quadra Futebol Society 1', sport: 'Futebol', price: 60, available: true },
    { id: 2, name: 'Quadra Futebol Society 2', sport: 'Futebol', price: 60, available: false },
    { id: 3, name: 'Quadra de Vôlei A', sport: 'Vôlei', price: 50, available: true },
    { id: 4, name: 'Quadra de Vôlei B', sport: 'Vôlei', price: 50, available: true }
  ];

  constructor(private router: Router) {}

  navigate(path: string, options?: any): void {
    switch (path) {
      case 'home':
        this.router.navigate(['/home']);
        break;
        case 'bookings':
        this.router.navigate(['/booking'], { queryParams: options });
        break;
        case 'profile':
        this.router.navigate(['/profile-user']);
        break;
        case 'my-bookings':
        this.router.navigate(['/my-bookings']);
        break;

    }
  }
}