import axios, { AxiosInstance } from "axios";
import { Schema$Game, SearchParams$Game } from "./types/Game.js";
import { SearchParams$Video, Schema$Video } from "./types/Video.js";
import { SearchParams$Gaming, Schema$Gaming } from "./types/Gaming.js";
import { SearchParams$GameTitle, Schema$GameTitle } from "./types/GameTitle.js";


export interface YouTubeClientOptions {
	host: string,
	port: number,
	https?: boolean
}

export class YouTubeClient {
	private httpClient: AxiosInstance
	private options: YouTubeClientOptions

	constructor(options?: YouTubeClientOptions) {
		this.options = {
			host: options?.host ?? "localhost",
			port: options?.port ?? 3000,
			https: options?.https ?? false
		}
		this.httpClient = axios.create({
			baseURL: `http${this.options.https ? 's' : ''}://${this.options.host}:${this.options.port}/`
		})
	}

	video(searchParams: SearchParams$Video): Promise<Schema$Video> {
		return this.httpClient.post("/video", searchParams)
	}

	game(searchParams: SearchParams$Game): Promise<Schema$Game> {
		return this.httpClient.post("/game", searchParams)
	}

	gaming(searchParams: SearchParams$Gaming): Promise<Schema$Gaming> {
		return this.httpClient.post("/gaming", searchParams)
	}

	gameTitle(searchParams: SearchParams$GameTitle): Promise<Schema$GameTitle> {
		return this.httpClient.post("/gametitle", searchParams)
	}

}