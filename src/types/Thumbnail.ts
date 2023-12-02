export interface Schema$Thumbnail {
    url?: string | null;
    height?: number | null;
    width?: number | null;
}

export interface Schema$ThumbnailDetails {
    default?: Schema$Thumbnail;
    medium?: Schema$Thumbnail;
    high?: Schema$Thumbnail;
    standard?: Schema$Thumbnail;
    maxres?: Schema$Thumbnail;
}
