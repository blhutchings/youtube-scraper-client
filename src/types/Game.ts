import { Schema$RichItemRenderer } from "./components/RichItemRenderer.js";

export type SearchParams$Game = {
	browseId: string,
	tab: "home" | "live" | "recent" | "official" | "about"
}

export interface Schema$Game {
	id?: string;
	snippet?: Schema$GameSnippet;
	home?: Schema$GameHome;
	live?: Schema$GameLive;
	recent?: Schema$GameRecent;
	official?: Schema$GameOfficial;
	about?: Schema$GameAbout;
}
export interface Schema$GameSnippet {
	title?: string;
	simpleDescription?: string;
	metadata?: string[];
	badges?: string[];
	boxart?: string;
	banner?: string;
	trailerId?: string;
}
export interface Schema$GameHome {
	fromDeveloper?: Schema$GameCard[];
}
export interface Schema$GameLive {
	results?: Schema$RichItemRenderer[];
	continue?: string
}
export interface Schema$GameRecent {
	results?: Schema$RichItemRenderer[];
	continue?: string
}
export interface Schema$GameOfficial {
	fromGame?: Schema$RichItemRenderer[]
	fromPublisher?: Schema$RichItemRenderer[]
	fromDeveloper?: Schema$RichItemRenderer[]
}
export interface Schema$GameAbout {
	description?: string;
	publishedAt?: string;
	links?: {
		title?: string;
		url?: string;
	}[]
}
export interface Schema$GameCard {
	title?: string;
	channelId?: string;
	boxArt?: string;
	liveViewersText?: string;
	isOfficialBoxArt?: boolean;
}
