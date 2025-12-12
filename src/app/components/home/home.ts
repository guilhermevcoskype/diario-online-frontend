import { Component, inject, model, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { SearchMedia } from "../search-media/search-media";
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-home',
  imports: [SearchMedia],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private auth = inject(AuthService);
  public mediaList = signal<Array<Game>>([]);
  public searchQuery = signal<string>('');



  get logado() {
    return this.auth.isLogged();
  }

  get user() {
    return this.auth.getUserData();
  }

  logout() {
    this.auth.logout();
  }

  handleSearch(query: string) {
    this.mediaList.set(
      this.mediaList().filter(m =>
        m.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  handleClear() {
    this.searchQuery.set('');
    this.mediaList.set([]);
  }

  inputMediaChanged(value: string) {
    this.searchQuery.set(value);
    if (value.trim() !== '' && value.length >= 3) {
      this.auth.searchGame(value).subscribe(response => {
        this.mediaList.set(response);
      });
    }
  }

  ngOnInit(): void {

  }

}
