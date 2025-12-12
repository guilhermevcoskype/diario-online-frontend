import { Component, inject, input } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { TranslateService } from '../../services/translate-service';
import { MediaStoreService } from '../../services/media-store-service';
import { Game } from '../../models/game.model';
import { Router } from 'express';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list-media',
  imports: [FormsModule, RouterModule],
  templateUrl: './user-list-media.html',
  styleUrl: './user-list-media.scss',
})
export class UserListMedia {
  auth = inject(AuthService);
  // translateService = inject(TranslateService);
  mediaStore = inject(MediaStoreService);
  inputUserMediaList = input<Game[]>([]);
  router = inject(Router);

  async goMediaPage(media: Game) {
    // media.summary = await this.translateService.translate(media.summary);
    this.mediaStore.selectedMedia.set(media);
    this.router.navigateByUrl("/media-page");
  }
  

}
