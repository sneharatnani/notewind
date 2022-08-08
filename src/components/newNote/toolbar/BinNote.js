import { useContext } from "react";
import Bin from "../../../assets/icons/BinIcon.js";
import { NewNoteContext } from "../../../context/newNoteContext.js";

export default function BinNote(props) {
  const { closeModal } = props;
  const { setNewNote, setIsDeleted } = useContext(NewNoteContext);

  function deleteNote() {
    setNewNote((prevNote) => ({ ...prevNote, deleted: true }));
    setIsDeleted(true);
    closeModal();
  }

  return (
    <button className="hover:text-gray-500/80" onClick={deleteNote}>
      <Bin svgProps="h-5 w-5" />
    </button>
  );
}
