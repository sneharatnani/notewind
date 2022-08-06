import UnArchive from "../../assets/icons/UnArchive.js";
import Bin from "../../assets/icons/Bin.js";
import { NotesContext } from "../../context/notesContext.js";
import { useContext } from "react";

export default function ArchivedNote(props) {
  const { title, body, labels, bg,id} = props;
    const { updateNote } = useContext(NotesContext);
    
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
      <div className="flex gap-2 flex-wrap mt-2">{labels}</div>
      <div className="invisible gap-x-4 mt-3 text-gray-600 flex group-hover:visible">
        <button onClick={() => updateNote(id, { archived: false })}>
          <UnArchive svgProps="h-4 w-4" />
        </button>
        <button onClick={() => updateNote(id, { deleted: true })}>
          <Bin svgProps="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
