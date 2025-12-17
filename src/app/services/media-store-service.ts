import { Injectable, signal } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class MediaStoreService {

  selectedMedia = signal<Game | null>(null);
  
}
