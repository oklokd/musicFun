import { useTrack } from "../bll/useTrack";

type Props = {
  selectedTrackId: string | null;
};

export function TrackDetails({ selectedTrackId }: Props) {
  const { selectedTrack } = useTrack(selectedTrackId);

  return (
    <div>
      <h2>Details</h2>
      {!selectedTrackId && <span>Track is not selected.</span>}
      {selectedTrackId && !selectedTrack && <span>Loading...</span>}
      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </div>
  );
}