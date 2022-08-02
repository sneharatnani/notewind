import { useContext } from "react";
import Bin from "../../../assets/icons/Bin.js";
import { NotesContext } from "../../../context/NotesContext.js";

export default function BinNote() {
  const { setNewNote } = useContext(NotesContext);

  function deleteNote() {
    setNewNote((prevNote) => ({ ...prevNote, deleted: true }));
  }

  return (
    <button className="hover:text-gray-500/80" onClick={deleteNote}>
      <Bin svgProps="h-5 w-5" />
    </button>
  );
}
