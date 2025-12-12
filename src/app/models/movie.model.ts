import { MediaBase } from "./media-base.model";

export interface Movie extends MediaBase {
  type: 'movie';
  movieId: number;
}