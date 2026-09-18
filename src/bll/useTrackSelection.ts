import { useState } from "react";

export function useTrackSelection() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const handleTrackSelect = (trackId: string) => {
    setSelectedTrackId(trackId);
  };

  const handleReset = () => {
    setSelectedTrackId(null);
  };

  return { selectedTrackId, handleTrackSelect, handleReset };
}