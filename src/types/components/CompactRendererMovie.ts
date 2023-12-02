import { Schema$CompactRenderer } from "./CompactRenderer.js";

export interface Schema$CompactRendererMovie extends Schema$CompactRenderer {
    type: "movie";
    useVerticalPoster?: boolean;
    metadataItems?: string[];
}
