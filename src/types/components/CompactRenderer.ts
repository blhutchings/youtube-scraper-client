import { Schema$ThumbnailDetails, Schema$Thumbnail } from "../Thumbnail.js";

export interface Schema$CompactRenderer {    
    // General
    type?: string
    videoId?: string;
    title?: string;
    thumbnails?: Schema$ThumbnailDetails;
    publishedTimeText?: string;
    viewCount?: number;
    length?: number;
    badges?: string[];

    channelTitle?: string
    channelThumbnail?: Schema$Thumbnail;
    ownerBadge?: string;
    channelId?: string;
    channelHandle?: string;
} 