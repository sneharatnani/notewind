import ColorPalette from "../ColorPalette.js";
import BinNote from "./BinNote.js";
import ArchiveNote from "./ArchiveNote.js";

export default function Toolbar() {
  return (
    <div className="flex gap-4">
      <ColorPalette />
      <BinNote />
      <ArchiveNote />
    </div>
  );
}
