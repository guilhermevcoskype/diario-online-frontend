import { MediaBase } from "./media-base.model";

export interface Game extends MediaBase {
  type: 'game';
  gameId: string;
}
