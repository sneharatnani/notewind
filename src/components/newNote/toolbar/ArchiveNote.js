import { useContext } from "react";
import Archive from "../../../assets/icons/ArchiveIcon.js";
import { NewNoteContext } from "../../../context/newNoteContext.js";

export default function ArchiveNote(props) {
  const { closeModal } = props;
  const { setNewNote, setIsArchived } = useContext(NewNoteContext);

  function archiveNote() {
    setNewNote((prevNote) => ({ ...prevNote, archived: !prevNote.archived }));
    setIsArchived(true);
    closeModal();
  }

  return (
    <button className="hover:text-gray-500/80" onClick={archiveNote}>
      <Archive svgProps="h-5 w-5" />
    </button>
  );
}
