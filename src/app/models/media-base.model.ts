export interface MediaBase {    
    name: string;
    summary: string;
    cover: string;
    type: 'movie' | 'serie' | 'game';
    rating?: number;
    comments?: string;
}
