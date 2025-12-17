import { Media } from './media-types.model';
export interface MediaToSave {
    id: string;
    gameId: string;
    name: string;
    summary: string;
    cover: string;
    type: string;
}