import { useContext } from "react";
import Bin from "../../../assets/icons/Bin.js";
import { NotesContext } from "../../../context/NotesContext.js";

export default function BinNote(props) {
  const { closeModal, createNewNote } = props;
  const { newNote, setNewNote, addNewNote, setNewDeleteNote } =
    useContext(NotesContext);

  function deleteNote() {
    setNewNote((prevNote) => ({ ...prevNote, deleted: true }));

    setNewDeleteNote(true);

    closeModal();
  }

  return (
    <button className="hover:text-gray-500/80" onClick={deleteNote}>
      <Bin svgProps="h-5 w-5" />
    </button>
  );
}
