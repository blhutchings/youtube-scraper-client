import { Schema$Thumbnail } from "../Thumbnail.js";
import { Schema$CompactRenderer } from "./CompactRenderer.js";

export interface Schema$CompactRendererPlaylist extends Schema$CompactRenderer {
    type: "playlist";
    playlistId?: string,
    index?: string,
    videoCount?: number,
    sidebarThumbnails?: Schema$Thumbnail[],
    topStandaloneBadge?: string;
    shareUrl?: string,
    isCourse?: boolean,
    isInfinite?: boolean
}