import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.page.html',
  styleUrls: ['./login-company.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonInput],
})
export class LoginCompanyPage {
  isLogin: boolean = true;

  constructor(private router: Router) {}

  toggleMode(): void {
    this.isLogin = !this.isLogin;
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}