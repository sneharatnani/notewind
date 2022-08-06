import { useContext } from "react";
import { NewNoteContext } from "../../../context/newNoteContext.js";
import Pinned from "../../../assets/icons/Pinned.js";
import Unpinned from "../../../assets/icons/Unpinned.js";

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
          <Pinned svgProps="h-5 w-5" />
        ) : (
          <Unpinned svgProps="h-5 w-5" />
        )}
      </button>
    );
}