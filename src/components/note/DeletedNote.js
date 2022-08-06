import { useContext } from "react";
import DeleteForever from "../../assets/icons/DeleteForever.js";
import Restore from "../../assets/icons/Restore.js";
import { NotesContext } from "../../context/notesContext.js";
import NoteLabel from "./NoteLabel.js";

export default function DeletedNote(props) {
    const { title, body, label, bg, id } = props;
    const { deleteNote, updateNote } = useContext(NotesContext);

  return (
    <div
      className={`group w-full rounded-lg p-4 border border-gray-200 max-h-60 box-border overflow-hidden hover:shadow-sm hover:border-gray-300 flex flex-col justify-between ${bg}`}
      onClick={() => console.log("opened")}
    >
      <div>
        {" "}
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm whitespace-pre-wrap break-words font-poppins">
          {body}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap mt-2">
        <NoteLabel label={label} />
      </div>
      <div className="invisible gap-x-4 mt-3 text-gray-600 flex group-hover:visible">
        <button onClick={() => deleteNote(id)}>
          <DeleteForever svgProps="h-[1.1rem] w-[1.1rem]" />
        </button>
        <button onClick={() => updateNote(id, { deleted: false })}>
          <Restore svgProps="h-[1.1rem] w-[1.1rem]" />
        </button>
      </div>
    </div>
  );
}
