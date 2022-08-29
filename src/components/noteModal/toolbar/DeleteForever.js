import DeleteForeverIcon from "../../../assets/icons/DeleteForeverIcon.js";

export default function DeleteForever({ deleteNoteForever }) {
  return (
    <button className="hover:text-gray-500/80" onClick={deleteNoteForever}>
      <DeleteForeverIcon />
    </button>
  );
}
