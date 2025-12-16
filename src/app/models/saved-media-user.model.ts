import { MediaToSave } from "./media-to-save.model";
import { Media } from "./media-types.model";

export interface SavedMediaUser {
        mediaRequestDTO: MediaToSave,
        email: string,
        rating: number,
        comments: string
}