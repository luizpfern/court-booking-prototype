import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonInput],
})
export class LoginUserPage {
  isLogin: boolean = true;

  constructor(private router: Router) {}

  toggleMode(): void {
    this.isLogin = !this.isLogin;
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}