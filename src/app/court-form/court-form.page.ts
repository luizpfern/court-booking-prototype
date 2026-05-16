import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonInput, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-court-form',
  templateUrl: './court-form.page.html',
  styleUrls: ['./court-form.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButton, IonContent, IonIcon, IonInput, IonSelect, IonSelectOption],
})
export class CourtFormPage {
  isEditing: boolean = false;

  court = {
    name: 'Quadra Futebol Society 1',
    sport: 'Futebol',
    price: 60,
    minDuration: 1,
    description: 'Quadra society com grama sintética, iluminação LED e capacidade para 10 jogadores.',
    amenities: ['Vestiário', 'Estacionamento', 'Iluminação LED'],
    openTime: '07:00',
    closeTime: '23:00',
    active: true,
  };

  sports: string[] = ['Futebol', 'Vôlei', 'Beach Tennis', 'Tênis'];

  amenitiesOptions: string[] = [
    'Vestiário',
    'Estacionamento',
    'Iluminação LED',
    'Arquibancada',
    'Bebedouro',
    'Wifi',
    'Lanchonete',
  ];

  constructor(private router: Router) {}

  toggleAmenity(item: string) {
    const index = this.court.amenities.indexOf(item);

    if (index > -1) {
      this.court.amenities.splice(index, 1);
    } else {
      this.court.amenities.push(item);
    }
  }

  isSelected(item: string): boolean {
    return this.court.amenities.includes(item);
  }

  saveForm() {
    this.router.navigate(['/my-courts']);
  }

  goBack() {
    this.router.navigate(['/my-courts']);
  }
}
