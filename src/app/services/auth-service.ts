import { SavedMediaUser } from './../models/saved-media-user.model';
import { Game } from './../models/game.model';
import { RegisterRequest } from '../models/register-request';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response';
import { UserMediaRequestUpdate } from '../models/user-media-request-update.model';

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
      console.log('Token: ', res.accessToken);
      console.log('Usuário logado: ', res.userResponseDTO);
      this.user.set(res.userResponseDTO);
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

  async updateUserMidia(userMediaRequestUpdate: UserMediaRequestUpdate): Promise<boolean> {
    console.log('Game que vai ser salvo: ', userMediaRequestUpdate);

    try {
      const user = await firstValueFrom(
        this.http.put<User>(this.apiUrl + 'user', userMediaRequestUpdate)
      );
      this.user.set(user);
      return true;
    } catch (e) {
      console.error('Erro ao salvar usuario: ', e);
      return false;
    }
  }
  
  async saveUserMidia(savedMediaUser: SavedMediaUser): Promise<boolean> {
    console.log('Game que vai ser salvo: ', savedMediaUser);

    try {
      const user = await firstValueFrom(
        this.http.post<User>(this.apiUrl + 'user/saveMediaOnUser', savedMediaUser)
      );
      this.user.set(user);
      return true;
    } catch (e) {
      console.error('Erro ao salvar usuario: ', e);
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
    const params = new HttpParams().set('gameName', name).set('email', this.user()?.email || '');
    return this.http.post<Game[]>(this.apiUrl + 'gamelist/games', params);
  }

  async refreshGamesUserList(user: User) {
    try {
      const refreshedUser = await firstValueFrom(this.http.post<User>(this.apiUrl + 'user/mediaFromUser', user.email));
      this.user.set(refreshedUser);
      return true;
    } catch (e) {
      console.error('Erro ao salvar usuario: ', e)
      return false;
    }
  }
}