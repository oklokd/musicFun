import clsx from "clsx";
import type { Track } from "../dal/types";
import styles from "./TrackItem.module.css";

type Props = {
  track: Track;
  isSelected: boolean;
  onTrackSelect: (trackId: string) => void;
};

export function TrackItem({ track, isSelected, onTrackSelect }: Props) {
  const classNames = clsx(styles.track, {
    [styles.selected]: isSelected,
  });

  const handleClick = () => onTrackSelect(track.id);

  return (
    <li className={classNames}>
      <div onClick={handleClick}>{track.attributes.title}</div>
      <audio controls src={track.attributes.attachments[0].url} />
    </li>
  );
}