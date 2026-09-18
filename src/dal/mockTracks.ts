import type { Track, TrackDetailsResource } from "./types";

export const MOCK_TRACKS: Track[] = [
  {
    id: "samurai-way-soundtrack",
    attributes: {
      title: "Samurai Way Soundtrack",
      attachments: [
        { url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" },
      ],
    },
  },
  {
    id: "samurai-way-soundtrack-instrumental",
    attributes: {
      title: "Samurai Way Soundtrack (Instrumental)",
      attachments: [
        { url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3" },
      ],
    },
  },
];

export const MOCK_TRACK_DETAILS: Record<string, TrackDetailsResource> = {
  "samurai-way-soundtrack": {
    id: "samurai-way-soundtrack",
    attributes: {
      title: "Samurai Way Soundtrack",
      lyrics: "",
      attachments: [
        { url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" },
      ],
    },
  },
  "samurai-way-soundtrack-instrumental": {
    id: "samurai-way-soundtrack-instrumental",
    attributes: {
      title: "Samurai Way Soundtrack (Instrumental)",
      lyrics: "",
      attachments: [
        { url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3" },
      ],
    },
  },
};