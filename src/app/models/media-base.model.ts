export interface MediaBase { 
    id: string;
    name: string;
    summary: string;
    cover: string;
    type: 'movie' | 'serie' | 'game';
    rating?: number;
    comments?: string;
}
