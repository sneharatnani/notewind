import { useContext } from "react";
import Archive from "../../../assets/icons/Archive.js";
import { NotesContext } from "../../../context/NotesContext.js";

export default function ArchiveNote(props) {
  const { closeModal, createNewNote } = props;
  const { setNewNote } = useContext(NotesContext);

  function archiveNote() {
    setNewNote((prevNote) => ({ ...prevNote, archived: !prevNote.archived }));
    createNewNote();
    closeModal();
  }

  return (
    <button className="hover:text-gray-500/80" onClick={archiveNote}>
      <Archive svgProps="h-5 w-5" />
    </button>
  );
}
