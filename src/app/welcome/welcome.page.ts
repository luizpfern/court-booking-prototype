import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trophyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonIcon],
})
export class WelcomePage {
  constructor(private router: Router) {
    addIcons({ trophyOutline });
  }

  goToLoginUser(): void {
    this.router.navigateByUrl('/login-user');
  }

  goToLoginCompany(): void {
    this.router.navigateByUrl('/login-company');
  }
}