import PinIcon from "../../assets/icons/PinIcon.js";
import UnpinIcon from "../../assets/icons/UnpinIcon.js";

export default function Pin(props) {
  const { pinned, pinNote } = props;

  return (
    <button className="hover:text-gray-500/80" onClick={pinNote}>
      {pinned ? <PinIcon /> : <UnpinIcon />}
    </button>
  );
}
