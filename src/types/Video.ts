import { Schema$ThumbnailDetails, Schema$Thumbnail } from "./Thumbnail.js";
import { Schema$CompactRendererMovie } from "./components/CompactRendererMovie.js";
import { Schema$CompactRendererPlaylist } from "./components/CompactRendererPlaylist.js";
import { Schema$CompactRendererVideo } from "./components/CompactRendererVideo.js";

export type SearchParams$Video = {
    videoId: string,
    playlistId?: string,
    index?: number,
    params?: string,
	next?: boolean,
	player?: boolean
}
export interface Schema$Video {
    id?: string;
    playability?: Schema$VideoPlayability;
    snippet?: Schema$VideoSnippet;
    statistics?: Schema$VideoStatistics;
    liveStreamingDetails?: Schema$VideoLiveStreamingDetails;
    metadata?: Schema$VideoMetadata;
    playlistDetails?: Schema$VideoPlaylistDetails;
    secondaryResults?: Schema$VideoSecondaryResultDetails;
}
export interface Schema$VideoPlayability {
    status?: string;
    reason?: string;
    trailer?: Schema$Video;
}
export interface Schema$VideoSnippet {
    publishedAt?: string;
    title?: string;
    description?: string;
    thumbnails?: Schema$ThumbnailDetails;
    channelId?: string;
    channelTitle?: string;
    tags?: string[];
    categoryId?: VideoCategoryId;
    isUpcoming?: boolean;
    isLive?: boolean;
    liveContentType?: "stream" | "premiere";
}
export interface Schema$VideoStatistics {
    viewCount?: number;
    likeCount?: number;
    commentCountText?: string;
}
export interface Schema$VideoLiveStreamingDetails {
    startTimestamp?: Date;
    endTimestamp?: Date;
    concurrentViewers?: number;
}
export interface Schema$VideoMetadata {
    channelHandle?: string
    channelBadge?: string
    subscriberCountText?: string
    allowRatings?: boolean
    game?: {
        title?: string;
        release?: string;
        boxArt?: Schema$Thumbnail[];
        id?: string;
    }
    topic?: {
        title?: string;
        art?: Schema$Thumbnail[];
        id?: string
    }
}
export interface Schema$VideoPlaylistDetails {
    title?: string;
    currentIndex?: number;
    playlistId?: string;
    videoCount?: number;
    playlistShareUrl?: string;
    isInfinite?: boolean;
    isCourse?: boolean;

    channelTitle?: string;
    channelId?: string;
    channelBadge?: string;
    channelHandle?: string;

    results?: Schema$VideoPlaylistResult[]
}
export interface Schema$VideoSecondaryResultDetails {
    results?: (Schema$CompactRendererPlaylist | Schema$CompactRendererVideo | Schema$CompactRendererMovie)[];
    continue?: string
}

export interface Schema$VideoPlaylistResult {
    selected?: boolean;
    videoId?: string;
    title?: string;
    thumbnails?: Schema$ThumbnailDetails;
    length?: number;

    channelTitle?: string;
    channelId?: string;
    channelBadge?: string;
    channelHandle?: string;
}

export type VideoCategoryMapping = {
    1: "Film & Animation",
    2: "Autos & Vehicles",
    10: "Music",
    15: "Pets & Animals",
    17: "Sports",
    18: "Short Movies",
    19: "Travel & Events",
    20: "Gaming",
    21: "Videoblogging",
    22: "People & Blogs",
    23: "Comedy",
    24: "Entertainment",
    25: "News & Politics",
    26: "Howto & Style",
    27: "Education",
    28: "Science & Technology",
    29: "Nonprofits & Activism",
    30: "Movies",
    31: "Anime/Animation",
    32: "Action/Adventure",
    33: "Classics",
    35: "Documentary",
    36: "Drama",
    37: "Family",
    38: "Foreign",
    39: "Horror",
    40: "Sci-Fi/Fantasy",
    41: "Thriller",
    42: "Shorts",
    43: "Shows",
    44: "Trailers"
}

export type VideoCategoryId = keyof VideoCategoryMapping & number