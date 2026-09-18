import { useEffect, useState } from "react";
import { getTrack } from "../dal/api";
import type { TrackDetailsResource } from "../dal/types";

export function useTrack(selectedTrackId: string | null) {
  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailsResource | null>(null);

  useEffect(() => {
    if (!selectedTrackId) {
      setSelectedTrack(null);
      return;
    }

    getTrack(selectedTrackId).then((json) => setSelectedTrack(json.data));
  }, [selectedTrackId]);

  return { selectedTrack };
}