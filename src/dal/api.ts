


const apiKey = "248bf326-8e6d-4238-a151-5cd681a0ddb5";

const headers: HeadersInit = {};
if (apiKey) {
  headers["api-key"] = apiKey;
}

export const getTracks = () => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5",
    { headers },
  ).then((res) => res.json());
};

export const getTrack = (trackId: string) => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    { headers },
  ).then((res) => res.json());
};