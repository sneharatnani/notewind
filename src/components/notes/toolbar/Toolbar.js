import ColorPaletteIcon from "../../../assets/icons/ColorPaletteIcon.js";
import Pinned from "../../../assets/icons/Pinned.js";
import Unpinned from "../../../assets/icons/Unpinned.js";
import ColorPalette from "./ColorPalette.js";
import { useState } from "react";
import Archive from "../../../assets/icons/Archive.js";
import Check from "../../../assets/icons/Check.js";
import BinNote from "./BinNote.js";

export default function Toolbar({ createNewNote, closeModal }) {
  const [show, setShow] = useState(false);

  function handleChange() {
    setShow((prev) => !prev);
  }

  return (
    <>
      {show && <ColorPalette />}
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4 text-gray-600">
          <button className="hover:text-gray-500/80" onClick={handleChange}>
            <ColorPaletteIcon />
          </button>

          <BinNote />

          <button
            className="hover:text-gray-500/80"
            onClick={() => console.log("archived")}
          >
            <Archive svgProps="h-5 w-5" />
          </button>

          <button
            className="hover:text-gray-500/80"
            onClick={() => console.log("Pinned")}
          >
            <Pinned />
          </button>

          <button
            className="hover:text-gray-500/80"
            onClick={() => console.log("unPinned")}
          >
            <Unpinned />
          </button>
        </div>

        <button
          onClick={() => {
            createNewNote();
            closeModal();
          }}
        >
          <Check />
        </button>
      </div>
    </>
  );
}
