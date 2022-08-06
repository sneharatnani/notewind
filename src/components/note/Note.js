import Archive from "../../assets/icons/Archive.js";
import Bin from "../../assets/icons/Bin.js";
import Pinned from "../../assets/icons/Pinned.js";
import NoteLabel from "./NoteLabel.js";
import Unpinned from "../../assets/icons/Unpinned.js";
import { NotesContext } from "../../context/notesContext.js";
import { useContext, useState } from "react";
import NotePreview from "../preview/NotePreview.js";

export default function Note(props) {
  const { title, body, label, bg,pinned,id } = props;
  const { updateNote } = useContext(NotesContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`group w-full rounded-lg p-4 border border-gray-200 max-h-60 box-border overflow-hidden hover:shadow-sm hover:border-gray-300 flex flex-col justify-between ${bg}`}
        onClick={() => setIsOpen(true)}
      >
        <div>
          {" "}
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm whitespace-pre-wrap break-words font-poppins">
            {body}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap mt-2">
          <NoteLabel label={label}/>
        </div>
        <div className="invisible gap-x-4 mt-3 text-gray-600 flex group-hover:visible">
          <button onClick={() => updateNote(id, { archived: true })}>
            <Archive svgProps="h-4 w-4" />
          </button>
          <button onClick={() => updateNote(id, { deleted: true })}>
            <Bin svgProps="h-4 w-4" />
          </button>
          <button onClick={() => updateNote(id, { pinned: !pinned })}>
            {pinned ? (
              <Pinned svgProps="h-4 w-4" />
            ) : (
              <Unpinned svgProps="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
      <NotePreview {...props} isOpen={isOpen} setIsOpen={ setIsOpen} />
    </>
  );
}
