import { useContext } from "react";
import { NewNoteContext } from "../../../context/newNoteContext.js";
import Pinned from "../../../assets/icons/PinIcon.js";
import Unpinned from "../../../assets/icons/UnpinIcon.js";

export default function PinNote() {
    const { setNewNote,newNote } = useContext(NewNoteContext);

    return (
      <button
        className="hover:text-gray-500/80"
        onClick={() =>
          setNewNote((prevNote) => ({ ...prevNote, pinned: !prevNote.pinned }))
        }
      >
        {newNote.pinned ? (
          <Pinned />
        ) : (
          <Unpinned />
        )}
      </button>
    );
}