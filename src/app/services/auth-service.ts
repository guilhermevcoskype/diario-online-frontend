import { SavedMediaUser } from './../models/saved-media-user.model';
import { Game } from './../models/game.model';
import { RegisterRequest } from '../models/register-request';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpContext, HttpContextToken, HttpParams } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response';
import { UserMediaRequestUpdate } from '../models/user-media-request-update.model';
import { environment } from '../../environments/environment';

export const IS_PUBLIC_API = new HttpContextToken(() => false);
@Injectable({
  providedIn: 'root',
})

export class AuthService {

  user = signal<User | null>(null);

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // ESTE É O MÉTODO QUE RECUPERA O TOKEN
  async login(email: string, password: string) {
    try {
      const res = await firstValueFrom(
        this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }, {
          // Aqui dizemos ao interceptor: "Ei, não mexa nesta requisição!"
          context: new HttpContext().set(IS_PUBLIC_API, true)
        }));

      localStorage.setItem('token', res.accessToken);

      this.user.set(res.userResponseDTO);
      return true;

    } catch (e) {
      return false;
    }
  }

  async register(registerRequest: RegisterRequest) {
    try {
      await firstValueFrom(
        this.http.post(`${this.apiUrl}/user` + '', registerRequest)
      );
      return true;
    } catch (e) {
      console.error('Erro ao registrar:', e);
      return false;
    }
  }

  async updateUserMidia(userMediaRequestUpdate: UserMediaRequestUpdate): Promise<boolean> {

    try {
      const user = await firstValueFrom(
        this.http.put<User>(`${this.apiUrl}/user`, userMediaRequestUpdate)
      );
      this.user.set(user);
      return true;
    } catch (e) {
      console.error('Erro ao salvar usuario: ', e);
      return false;
    }
  }

  async saveUserMidia(savedMediaUser: SavedMediaUser): Promise<boolean> {

    try {
      const user = await firstValueFrom(
        this.http.post<User>(`${this.apiUrl}/user/saveMediaOnUser`, savedMediaUser)
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
    return this.http.post<Game[]>(
      `${this.apiUrl}/gamelist/games`,
      {},
      {
        params: new HttpParams()
          .set('gameName', name)
          .set('email', this.user()?.email ?? '')
      }
    );
  }

  async refreshGamesUserList(user: User) {
    try {
      const refreshedUser = await firstValueFrom(this.http.post<User>(`${this.apiUrl}/user/mediaFromUser`, user.email));
      this.user.set(refreshedUser);
      return true;
    } catch (e) {
      console.error('Erro ao salvar usuario: ', e)
      return false;
    }
  }
}