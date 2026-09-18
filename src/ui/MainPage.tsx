import { PageTitle } from "./PageTitle";
import { Playlist } from "./Playlist";
import { TrackDetails } from "./TrackDetails";
import { useTrackSelection } from "../bll/useTrackSelection";

export function MainPage() {
    const { selectedTrackId, handleTrackSelect, handleReset } =
        useTrackSelection();

    return (
        <div>
            <PageTitle value="Musicfun Player" />
            <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <Playlist
                        selectedTrackId={selectedTrackId}
                        onTrackSelect={handleTrackSelect}
                        onReset={handleReset}
                    />
                </div>
                <div style={{ width: "300px", flexShrink: 0 }}>
                    <TrackDetails selectedTrackId={selectedTrackId} />
                </div>
            </div>
        </div>
    );
}

