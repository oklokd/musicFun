import { useTracks } from "../bll/useTracks";
import { TrackItem } from "./TrackItem";

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string) => void;
  onReset: () => void;
};

export function Playlist({ selectedTrackId, onTrackSelect, onReset }: Props) {
  const { tracks } = useTracks();

  const handleResetClick = () => onReset();

  if (tracks === null) return <div>Loading...</div>;
  if (tracks.length === 0) return <div>No tracks</div>;

  return (
    <div>
      <button onClick={handleResetClick}>Reset selection</button>
      <ul>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            isSelected={track.id === selectedTrackId}
            onTrackSelect={onTrackSelect}
          />
        ))}
      </ul>
    </div>
  );
}