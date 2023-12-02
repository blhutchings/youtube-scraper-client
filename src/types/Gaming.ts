import { Schema$GameCard } from "./Game.js";
import { Schema$RichItemRenderer } from "./components/RichItemRenderer.js";
import { Schema$Thumbnail } from "./Thumbnail.js";

export type SearchParams$Gaming = {
    tab: "live" | "trending"
}

export interface Schema$Gaming {
    id?: string;
    snippet?: Schema$GamingSnippet;
    live?: Schema$GamingLive
    trending?: Schema$GamingTrending;
}

export interface Schema$GamingSnippet {
    title?: string;
    thumbnail?: Schema$Thumbnail[];
    subscriberCountText?: string;
    channelHandle?: string
}

export interface Schema$GamingLive {
    results?: Schema$GameCard[];
    continue: () => Promise<Schema$GamingLive | undefined>;
}

export interface Schema$GamingTrending {
    results?: Schema$RichItemRenderer[];
    continue: () => Promise<Schema$GamingTrending | undefined>;
}
