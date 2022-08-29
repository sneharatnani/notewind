import RestoreIcon from "../../../assets/icons/RestoreIcon.js";

export default function Restore({ restoreNote }) {
  return (
    <button className="hover:text-gray-500/80" onClick={restoreNote}>
      <RestoreIcon />
    </button>
  );
}
