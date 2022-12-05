import { useState } from "react";
import NotePreview from "../NotePreview.js";
import NoteLabel from "./NoteLabel.js";

export default function Note(props) {
  const { title, body, label, bg } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-[calc(100% / 1)] mb-4">
        <div
          data-testid="note"
          className={`group w-full rounded-lg p-4 border border-gray-200 box-border overflow-hidden cursor-pointer hover:shadow-sm hover:border-gray-300 flex flex-col justify-between ${bg}`}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div>
            {" "}
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm font-poppins break-words whitespace-pre-wrap overflow-hidden max-h-60">
              {body}
            </p>
          </div>
          {label.length !== 0 && (
            <div className="mt-2">
              {[...label].map((l) => (
                <NoteLabel label={l} key={l} />
              ))}
            </div>
          )}
        </div>
      </div>
      <NotePreview {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
