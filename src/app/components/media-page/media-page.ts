import { MediaToSave } from './../../models/media-to-save.model';
import { Game } from './../../models/game.model';
import { AuthService } from './../../services/auth-service';
import { Component, inject, model, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MediaStoreService } from '../../services/media-store-service';
import { SavedMediaUser } from '../../models/saved-media-user.model';

@Component({
  selector: 'app-media-page',
  imports: [RouterModule],
  templateUrl: './media-page.html',
  styleUrl: './media-page.scss',
})
export class MediaPage {
  auth = inject(AuthService);
  mediaStore = inject(MediaStoreService);
  router = inject(Router);
  media = this.mediaStore.selectedMedia;
  comments = signal<string>('');
  rating = signal<number | undefined>(undefined);
  editComments = signal<boolean>(false);
  editRating = signal<boolean>(false);
  game!: Game;

  public Array = Array;

  emptyStars = () => {
    const r = this.rating() ?? 0;
    return Array(5 - r);
  };

  setRating(value: number) {
    this.rating.set(value);
    console.log("Rating set to: ", value);
    this.editRating.set(false); // sai do modo edição
  }

  inputComments(event: Event) {
    this.comments.set((event.target as HTMLTextAreaElement).value);
  }

  inputRating(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.rating.set(value === '' ? undefined : Number(value));
  }

  saveGameDiary() {
    this.game = <Game>this.mediaStore.selectedMedia();
    const commentsToSave = this.comments();
    const ratingToSave = this.rating();
    console.log("Valor do game: ", this.game);
    if (this.game) {
      const email = <string>this.auth.getUserData()?.email;
      const savedMediaUser: SavedMediaUser = {
        mediaRequestDTO: {
          id: this.game.id,
          gameId: this.game.gameId,
          name: this.game.name,
          summary: this.game.summary,
          cover: this.game.cover,
          type: "GAME"
        },
        email: email,
        rating: ratingToSave ?? 0,
        comments: commentsToSave
      }
      this.auth.saveUserMidia(savedMediaUser);
    }
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
    const media = this.mediaStore.selectedMedia();
    if (media) {
      this.comments.set(media.comments ?? '');
      this.rating.set(media.rating ?? undefined);

      if (media.comments == null) this.editComments.set(true);
      if (media.rating == undefined) this.editRating.set(true);
    }
  }

}
