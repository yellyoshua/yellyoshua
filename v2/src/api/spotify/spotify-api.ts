import type { SpotifyCurrentlyPlayingContext } from "../../interfaces";

const SPOTIFY_CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = import.meta.env.SPOTIFY_CLIENT_SECRET
const SPOTIFY_OAUTH_REDIRECT_URI = import.meta.env.SPOTIFY_OAUTH_REDIRECT_URI

export default {
	async getCurrentTrack(token: string): Promise<SpotifyCurrentlyPlayingContext | null> {
		try {
			const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				}
			});

			if (response.status === 204) {
				return null;
			}

			if (!response.ok) throw response.statusText;

			const data = await response.json();
			if (data.error) throw data;

	 		return data;
		} catch (error) {
  		console.log('error :', error);
			return null;
		}
	},
	async refreshToken (refresh_token: string): Promise<Record<string, string>> {
		try {
			const response = await fetch('https://accounts.spotify.com/api/token', {
				method: 'post',
				headers: {
					Authorization: `Basic ${Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: serializeBody({
					grant_type: 'refresh_token',
					refresh_token: refresh_token,
				})
			});

			const data = await response.json();

			if (data.error) throw data;

			return {...data, refresh_token: data.refresh_token || refresh_token};
		} catch (error) {
			console.error('error:', error);
			throw error;
		}
	},
	async claimAccessToken({code}: Record<string, string>): Promise<Record<string, string>> {
		try {
			const response = await fetch('https://accounts.spotify.com/api/token', {
				method: 'post',
				headers: {
					Authorization: `Basic ${Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: serializeBody({
					grant_type: 'authorization_code',
					code: code,
					redirect_uri: SPOTIFY_OAUTH_REDIRECT_URI,
					scope: 'user-read-playback-state user-read-currently-playing'
				})
			});
			
			const data = await response.json();

			if (data.error) throw data;

			return data;
		} catch (error) {
			console.error('error:', error);
			throw error;
		}
	},
	authorizeLink() {
		const scope = 'user-read-playback-state user-read-currently-playing user-read-playback-position playlist-read-collaborative playlist-read-private';
		const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

		const url = new URL('https://accounts.spotify.com/authorize');
		url.searchParams.append('response_type', 'code');
		url.searchParams.append('client_id', SPOTIFY_CLIENT_ID);
		url.searchParams.append('scope', scope);
		url.searchParams.append('redirect_uri', SPOTIFY_OAUTH_REDIRECT_URI);
		url.searchParams.append('state', state);

		return url.toString();
	}
};

function serializeBody (content: Record<string, any>) {
	return Object.keys(content)
	.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(content[key])}`)
	.join('&');
}
