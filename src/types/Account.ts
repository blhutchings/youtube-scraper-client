import { Schema$RichItemRenderer } from "./components/RichItemRenderer.js";
import { Schema$Thumbnail } from "./Thumbnail.js";

export interface SearchParams$Account {
	browseId: string,
	tab: "videos" | "live" | "about"
}

export interface Schema$Account {
	id?: string;
	snippet?: Schema$AccountSnippet;
	about?: Schema$AccountAbout;
	live?: Schema$AccountLive;
	videos?: Schema$AccountVideos;
}

export interface Schema$AccountSnippet {
	title?: string;
	description?: string;
	thumbnail?: Schema$Thumbnail;
	subscriberCountText?: string;
	videoCount?: number;
	channelHandle?: string
	tags?: string[]
	banner?: Schema$Thumbnail;
	headerLinks?: {
		title?: string;
		url?: string;
		icon?: string;
	}[];
}

export interface Schema$AccountAbout {
	description?: string;
	totalChannelViews?: number;
	publishedAt?: string;
	country?: string;
	links?: {
		title?: string;
		icon?: string;
		url?: string;
	}[]
}

export interface Schema$AccountLive {
	results?: Schema$RichItemRenderer[];
	continue?: string
}

export interface Schema$AccountVideos {
	results?: Schema$RichItemRenderer[];
	continue?: string
}
