import { Game } from './../models/game.model';
import { RegisterRequest } from '../models/register-request';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response';
import { UserMediaRequestUpdate } from '../models/userMediaRequestUpdate.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user = signal<User | null>(null);

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  // ESTE É O MÉTODO QUE RECUPERA O TOKEN
  async login(email: string, password: string) {
    try {
      const res = await firstValueFrom(
        this.http.post<AuthResponse>(this.apiUrl + 'login', { email, password })
      );

      localStorage.setItem('token', res.accessToken);

      console.log('Usuário logado:', res.userResponse);
      this.user.set(res.userResponse);
      return true;

    } catch (e) {
      return false;
    }
  }

  async register(registerRequest: RegisterRequest) {
    try {
      await firstValueFrom(
        this.http.post(this.apiUrl + 'user', registerRequest)
      );
      return true;
    } catch (e) {
      console.error('Erro ao registrar:', e);
      return false;
    }
  }

  async updateUserMidia(userMediaRequestUpdate: UserMediaRequestUpdate) {
    console.log("Game que vai ser salvo: ", userMediaRequestUpdate)
    try {
      await this.http.put(this.apiUrl + 'user', userMediaRequestUpdate);
      return true;
    } catch (e) {
      console.error('Erro ao salvar usuario: ', e)
      return false;
    }
  }

  getUserData() {
    return this.user();
  }

  logout() {
    localStorage.removeItem('token');
    this.user.set(null);
  }

  isLogged() {
    return this.user() !== null;
  }

  searchGame(name: string) {
    return this.http.post<Game[]>(this.apiUrl + 'gamelist/games', name);
  }

  async refreshGamesUserList(user: User) {
    try {
      await this.http.post(this.apiUrl + 'user/userMedia', user.email);
      return true;
    } catch (e) {
      console.error('Erro ao salvar usuario: ', e)
      return false;
    }
  }
}