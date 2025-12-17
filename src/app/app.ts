import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('diario-online-frontend');
  auth = inject(AuthService);

  get user() {
    return this.auth.getUserData();
  }

  logout(){
    this.auth.logout();
  }
}
