// Type for Spotify Artist
type SpotifyArtist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

// Type for Spotify Album Image
type SpotifyAlbumImage = {
  height: number;
  url: string;
  width: number;
};

// Type for Spotify Album
type SpotifyAlbum = {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: SpotifyAlbumImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

// Type for Spotify Track External IDs
type SpotifyExternalIDs = {
  isrc: string;
};

// Type for Spotify Track
type SpotifyTrack = {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SpotifyExternalIDs;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

// Type for Spotify Actions Disallows
type SpotifyDisallows = {
  resuming: boolean;
  toggling_repeat_context: boolean;
  toggling_repeat_track: boolean;
  toggling_shuffle: boolean;
};

// Type for Spotify Actions
type SpotifyActions = {
  disallows: SpotifyDisallows;
};

// Type for Spotify Currently Playing Context
export type SpotifyCurrentlyPlayingContext = {
  timestamp: number;
  context: null | any; // Replace with an appropriate type if context structure is known
  progress_ms: number;
  item: SpotifyTrack;
  currently_playing_type: string;
  actions: SpotifyActions;
  is_playing: boolean;
};