import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  establishments = [
    { id: 1, name: 'Arena Sport Center', sports: ['Futebol', 'Vôlei'], distance: '0.8 km', rating: 4.9, price: 60, image: 'assets/images/establishments/arena-sport.png' },
    { id: 2, name: 'Beach Park Courts', sports: ['Beach Tennis'], distance: '1.2 km', rating: 4.8, price: 80, image: 'assets/images/establishments/beach-park.png' },
    { id: 3, name: 'Centro Esportivo Vila Nova', sports: ['Futebol', 'Tênis'], distance: '2.1 km', rating: 4.7, price: 55, image: 'assets/images/establishments/vila-nova.png' },
    { id: 4, name: 'Tênis Clube Ribeirão', sports: ['Tênis'], distance: '3.4 km', rating: 4.6, price: 90, image: 'assets/images/establishments/tenis-clube.png' },
    { id: 5, name: 'Quadras do Parque', sports: ['Vôlei', 'Beach Tennis'], distance: '4.0 km', rating: 4.5, price: 50, image: 'assets/images/establishments/quadras-parque.png' }
  ];

  selectedSport: string = 'Todos';
  sports: string[] = ['Todos', 'Futebol', 'Vôlei', 'Beach Tennis', 'Tênis'];

  constructor(private router: Router) {}

  get filteredEstablishments() {
    return this.selectedSport === 'Todos'
      ? this.establishments
      : this.establishments.filter(establishment => establishment.sports.includes(this.selectedSport));
  }

  get topRatedEstablishments() {
    return this.establishments.slice().sort((a, b) => b.rating - a.rating);
  }

  filterBySport(sport: string): void {
    this.selectedSport = sport;
  }

  navigateToEstablishment(id: number): void {
    this.router.navigate(['/establishment', id]);
  }

  navigateToBookings(): void {
    this.router.navigate(['/my-bookings']);
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile-user']);
  }

}
