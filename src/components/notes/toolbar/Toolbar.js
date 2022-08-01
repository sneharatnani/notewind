import ColorPaletteIcon from "../ColorPaletteIcon.js";
import BinNote from "./BinNote.js";
import ArchiveNote from "./ArchiveNote.js";
import Pinned from "./Pinned.js";
import Unpinned from "./Unpinned.js";
import SaveNote from "./SaveNote.js";
import ColorPalette from "./ColorPalette.js";
import { useState } from "react";

export default function Toolbar({ createNewNote, closeModal }) {
  const [show, setShow] = useState(false);
  function change() {
    setShow((prev) => !prev);
  }
  return (
    <>
      {show && <ColorPalette />}
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4">
          <ColorPaletteIcon change={change} />
          <BinNote />
          <ArchiveNote />
          <Pinned />
          {/* <Unpinned /> */}
        </div>
        <SaveNote createNewNote={createNewNote} closeModal={closeModal} />
      </div>
    </>
  );
}
