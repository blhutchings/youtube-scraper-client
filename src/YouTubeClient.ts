import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Schema$Game, SearchParams$Game } from "./types/Game.js";
import { SearchParams$Video, Schema$Video } from "./types/Video.js";
import { SearchParams$Gaming, Schema$Gaming } from "./types/Gaming.js";
import { SearchParams$GameTitle, Schema$GameTitle } from "./types/GameTitle.js";


export interface YouTubeClientOptions {
	host: string,
	port: number,
	https?: boolean,
	timeout?: number
}

export class YouTubeClient {
	private httpClient: AxiosInstance
	private options: YouTubeClientOptions;

	constructor(options?: YouTubeClientOptions) {
		this.options = {
			host: options?.host ?? "localhost",
			port: options?.port ?? 3000,
			https: options?.https ?? false,
			timeout: options?.timeout ?? 30000
		};

		this.httpClient = axios.create({
			baseURL: `http${this.options.https ? 's' : ''}://${this.options.host}:${this.options.port}/`,
			timeout: this.options.timeout
		})
	}

	video(searchParams: SearchParams$Video): Promise<AxiosResponse<Schema$Video>> {
		return this.httpClient.post("/video", searchParams);
	}

	game(searchParams: SearchParams$Game): Promise<AxiosResponse<Schema$Game>> {
		return this.httpClient.post("/game", searchParams);
	}

	gaming(searchParams: SearchParams$Gaming): Promise<AxiosResponse<Schema$Gaming>> {
		return this.httpClient.post("/gaming", searchParams);
	}

	gameTitle(searchParams: SearchParams$GameTitle): Promise<AxiosResponse<Schema$GameTitle>> {
		return this.httpClient.post("/gametitle", searchParams);
	}

}