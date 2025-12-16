import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { TranslateService } from '../../services/translate-service';
import { Game } from '../../models/game.model';
import { Router } from '@angular/router';
import { MediaStoreService } from '../../services/media-store-service';

@Component({
  selector: 'app-user-data-show',
  imports: [],
  templateUrl: './user-data-show.html',
  styleUrl: './user-data-show.scss',
})
export class UserDataShow {
  auth = inject(AuthService);
  medias = this.auth.getUserData()?.media ? <Game[]>this.auth.getUserData()?.media : [];
  mediaStore = inject(MediaStoreService);
  router = inject(Router);

  async goMediaPage(media: Game) {
    this.mediaStore.selectedMedia.set(media);
    this.router.navigateByUrl("/media-page");
  }
}
