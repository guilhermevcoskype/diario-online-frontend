import { Media } from './../../models/media-types.model';
import { User } from './../../models/user.model';
import { Game } from './../../models/game.model';
import { AuthService } from './../../services/auth-service';
import { Component, inject, model, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MediaStoreService } from '../../services/media-store-service';
import { UserMediaRequestUpdate } from '../../models/userMediaRequestUpdate.model';

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
  game!: Game;

  inputComments(event: Event) {
    this.comments.set((event.target as HTMLTextAreaElement).value);
  }

  saveGameDiary() {
    this.game = <Game>this.mediaStore.selectedMedia();
    this.game.comments = this.comments();
    console.log("Valor do game: ", this.game);
    if (this.game) {
      const email = <string>this.auth.getUserData()?.email;
      //let medias: Array<Media> = [];
      
      // if(<Media[]>this.auth.getUserData()?.media){
      //   medias = (<Media[]>this.auth.getUserData()?.media);
      // }
      // medias.push(this.game);
      const userRequest: UserMediaRequestUpdate = {
        email: email,
        media: this.game
      }
      this.auth.updateUserMidia(userRequest);
    }
    this.auth.refreshGamesUserList(<User>this.auth.user());
    this.router.navigateByUrl("/home");
  }


}
