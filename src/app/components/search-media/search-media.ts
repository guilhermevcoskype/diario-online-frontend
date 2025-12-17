import { TranslateService } from './../../services/translate-service';
import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Game } from '../../models/game.model';
import { Router, RouterModule } from '@angular/router';
import { MediaStoreService } from '../../services/media-store-service';

@Component({
  selector: 'app-search-media',
  imports: [FormsModule, RouterModule],
  templateUrl: './search-media.html',
  styleUrl: './search-media.scss',
})
export class SearchMedia {

  auth = inject(AuthService);
  translateService = inject(TranslateService);
  mediaStore = inject(MediaStoreService);
  inputMediaList = input<Game[]>([]);
  loading = input<boolean>(false);
  router = inject(Router);

  async goMediaPage(media: Game) {
    console.log("Media selecionada: ", media);
    if (this.auth.getUserData() != null) {
      const mediaFromUser = this.auth.getUserData()?.media;
      console.log("Mídias do usuário: ", mediaFromUser);
      if (mediaFromUser && mediaFromUser.length > 0) {
        const existingMedia = mediaFromUser.find((m: any) => m.gameId === media.gameId);
        if (existingMedia) {
          console.log("Media já salvo pelo usuário: ", existingMedia);
          media.summary = existingMedia.summary;
        } else {
          console.log("Media não encontrada nos salvos do usuário. Traduzindo e abrindo página.");
          media.summary = await this.translateService.translate(media.summary);
        }
      }
    }
    this.mediaStore.selectedMedia.set(media);
    this.router.navigateByUrl("/media-page");
  }


}
