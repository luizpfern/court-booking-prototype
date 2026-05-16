import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.page.html',
  styleUrls: ['./profile-company.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButton, IonContent, IonIcon, IonInput],
})
export class ProfileCompanyPage {
  establishment = {
    name: 'Arena Sport Center',
    fantasyName: 'Arena Sport Center',
    cnpj: '12.345.678/0001-99',
    email: 'contato@arenasport.com.br',
    phone: '(16) 99999-1234',
    address: 'Av. Presidente Vargas, 1200',
    city: 'Ribeirão Preto, SP',
    cep: '14020-010',
    openHours: 'Seg-Sex: 07h às 23h | Sab-Dom: 08h às 22h',
    memberSince: 'Janeiro 2026',
    totalCourts: 4,
    totalBookings: 128,
    rating: 4.9,
  };

  isEditing: boolean = false;

  sports = ['Futebol', 'Vôlei'];

  actions = [
    { label: 'Notificações', icon: 'notifications-outline' },
    { label: 'Plano e Assinatura', icon: 'ribbon-outline' },
    { label: 'Suporte', icon: 'help-circle-outline' },
  ];

  constructor(private router: Router) {}

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveProfile() {
    this.isEditing = false;
  }

  logout() {
    this.router.navigate(['/welcome']);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
