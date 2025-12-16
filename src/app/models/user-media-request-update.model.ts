import { Media } from "./media-types.model";

export interface UserMediaRequestUpdate {
  email: string;
  media?: Media;
}
