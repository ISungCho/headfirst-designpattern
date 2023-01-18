const PlayStatus = {
	START: 'Start',
	STOP: 'Stop',
	QUIT: 'Quit',
}
type PlayStatusType = keyof typeof PlayStatus

export abstract class Component {
	#bpm!: number
	#playStatus!: PlayStatusType
	setBpm(bpm: number) {
		this.#bpm = bpm
	}
	getBpm() {
		return this.#bpm
	}

	setPlayStatus(playStatus: PlayStatusType) {
		this.#playStatus = playStatus
	}
	getPlayStatus() {
		return this.#playStatus
	}
}
