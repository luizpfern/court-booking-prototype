import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButton, IonContent, IonIcon, IonInput],
})
export class ProfileUserPage {
  user = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(16) 99999-8765',
    cpf: '123.456.789-00',
    cep: '14020-010',
    city: 'Ribeirão Preto, SP',
    memberSince: 'Janeiro 2026',
    totalBookings: 12,
    avatar: null,
  };

  isEditing: boolean = false;

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
}