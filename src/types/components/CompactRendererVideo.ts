import { Schema$CompactRenderer } from "./CompactRenderer.js";

export interface Schema$CompactRendererVideo extends Schema$CompactRenderer {
    type: "video";
    isShort?: boolean;
    isLive?: boolean;
    concurrentViewers?: number;
    liveContentType?: "stream" | "premiere";
}