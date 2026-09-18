import { MOCK_TRACKS, MOCK_TRACK_DETAILS } from "./mockTracks";
import type { Track, TrackDetailsResource } from "./types";

const apiKey = import.meta.env.VITE_API_KEY;

const headers: HeadersInit = {};
if (apiKey) {
  headers["api-key"] = apiKey;
}

export const getTracks = async (): Promise<{ data: Track[] }> => {
  try {
    const res = await fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5",
      { headers },
    );
    if (!res.ok) throw new Error(`API error ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn("getTracks: fallback to mock", e);
    return { data: MOCK_TRACKS };
  }
};

export const getTrack = async (
  trackId: string,
): Promise<{ data: TrackDetailsResource }> => {
  try {
    const res = await fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
      { headers },
    );
    if (!res.ok) throw new Error(`API error ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn("getTrack: fallback to mock", e);

    const details = MOCK_TRACK_DETAILS[trackId];
    if (details) return { data: details };

    const track = MOCK_TRACKS.find((t: Track) => t.id === trackId);
    if (!track) throw e;

    return {
      data: {
        id: track.id,
        attributes: {
          title: track.attributes.title,
          lyrics: "",
          attachments: track.attributes.attachments,
        },
      },
    };
  }
};