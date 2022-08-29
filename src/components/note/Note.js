import NoteLabel from "./NoteLabel.js";
import { useState } from "react";
import NotePreview from "../NotePreview.js";

export default function Note(props) {
  const { title, body, label, bg } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`group w-full rounded-lg p-4 border border-gray-200 max-h-60 box-border overflow-hidden cursor-pointer hover:shadow-sm hover:border-gray-300 flex flex-col justify-between ${bg}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div>
          {" "}
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm font-poppins max-h-20 break-words whitespace-pre-wrap overflow-hidden">
            {body}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap mt-2">
          <NoteLabel label={label} />
        </div>
      </div>
      <NotePreview {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
