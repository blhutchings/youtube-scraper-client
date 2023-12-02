import ky, { KyInstance } from "ky";
import { Schema$Game, SearchParams$Game } from "./types/Game.js";
import { SearchParams$Video, Schema$Video } from "./types/Video.js";
import { SearchParams$Gaming, Schema$Gaming } from "./types/Gaming.js";
import { SearchParams$GameTitle, Schema$GameTitle } from "./types/GameTitle.js";

export interface YouTubeClientOptions {
	host: string,
	port: number,
	https: boolean
}

export class YouTubeClient {
	private httpClient: KyInstance
	private options: YouTubeClientOptions

	constructor(options?: YouTubeClientOptions) {
		this.options = options ?? { host: "localhost", port: 3000, https: false }
		this.httpClient = ky.extend({ prefixUrl: `http${this.options.https ? 's' : ''}://${this.options.host}:${this.options.port}` })
	}

	video(searchParams: SearchParams$Video): Promise<Schema$Video> {
		return this.httpClient.post("/video", { json: searchParams }).json()
	}

	game(searchParams: SearchParams$Game): Promise<Schema$Game> {
		return this.httpClient.post("/game", { json: searchParams }).json()
	}

	gaming(searchParams: SearchParams$Gaming): Promise<Schema$Gaming> {
		return this.httpClient.post("/gaming", { json: searchParams }).json()
	}

	gameTitle(searchParams: SearchParams$GameTitle): Promise<Schema$GameTitle> {
		return this.httpClient.post("/gametitle", { json: searchParams }).json()
	}

}