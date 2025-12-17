import { Media } from "./media-types.model";

export interface User {
  name: string;
  email: string;
  media?: Media[];
  roles: string[];
}
