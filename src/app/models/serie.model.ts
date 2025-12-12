import { MediaBase } from "./media-base.model";


export interface Serie extends MediaBase {
  type: 'serie';
    serieId: number;
}
