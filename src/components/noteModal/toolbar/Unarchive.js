import UnarchiveIcon from "../../../assets/icons/UnArchiveIcon.js";

export default function Unarchive({ unarchiveNote }) {
  return (
    <button className="hover:text-gray-500/80" onClick={unarchiveNote}>
      <UnarchiveIcon />
    </button>
  );
}
