import { Schema$GameCard } from "../index.js";
import { Schema$RichItemRenderer } from "./components/RichItemRenderer.js";

export type SearchParams$Gaming = {
    tab: "live" | "trending"
	continuation?: string
}

export interface Schema$Gaming {
    live?: Schema$GamingLive
    trending?: Schema$GamingTrending;
}


export interface Schema$GamingLive {
    results?: Schema$GameCard[];
    continuation?: string
}

export interface Schema$GamingTrending {
    results?: Schema$RichItemRenderer[];
    continuation?: string
}
